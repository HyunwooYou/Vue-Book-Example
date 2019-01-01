<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">연락처 관리 앱</h1>
      <p>(Dynamic Component + EventBus + Axios)</p>
    </div>
    <component :is="currentView" :contact="contact"></component>
    <contact-list :contactlist="contactlist"></contact-list>
    <paginate ref="pagebuttons"
      :page-count="totalpage"
      :page-range="7"
      :margin-pages="3"
      :click-handler="pageChanged"
      :prev-text="'이전'"
      :next-text="'다음'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
  import Vue from 'vue';

  import ContactList from './components/ContactList.vue';
  import AddContact from './components/AddContact.vue';
  import UpdateContact from './components/UpdateContact.vue';
  // import UpdatePhoto from './components/UpdatePhoto.vue';

  import CONF from './config.js';
  import eventBus from './EventBus.js';
  import Paginate from 'vuejs-paginate';

  export default {
    name: 'app',
    components: {
      ContactList,
      AddContact,
      UpdateContact,
      // UpdatePhoto,
      Paginate
    },
    data () {
      return {
        currentView: null,
        contact: { no: 0, name: '', tel: '', address: '', photo: '' },
        contactlist: {
          pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, contacts: []
        }
      }
    },
    mounted () {
      this.fetchContacts();

      eventBus.$on('cancel', () => {
        this.currentView = null;
      });
      eventBus.$on('addSubmit', (contact) => {
        this.currentView = null;
        this.addContact(contact);
      });
      eventBus.$on('updateSubmit', (contact) => {
        this.currentView = null;
        this.updateContact(contact);
      });
      eventBus.$on('addContactForm', () => {
        this.currentView = 'addContact';
      });
      eventBus.$on('editContactForm', (no) => {
        this.fetchContactOne(no);
        this.currentView = 'updateContact';
      });
      eventBus.$on('deleteContact', (no) => {
        this.deleteContact(no);
      });
      eventBus.$on('editPhoto', (no) => {
        this.fetchContactOne(no);
        this.currentView = 'updatePhoto';
      });
      eventBus.$on('updatePhoto', (no, file) => {
        if (typeof file !== 'undefined') {
          this.updatePhoto(no, file);
        }
        this.currentView = null;
      });
    },
    computed: {
      totalpage () {
        return Math.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1;
      }
    },
    methods: {
      fetchContacts () {
        this.$axios.get(CONF.FETCH, {
          params: {
            pageno:   this.contactlist.pageno,
            pagesize: this.contactlist.pagesize
          }
        })
        .then((res) => {
          this.contactlist = res.data;
        })
        .catch((ex) => {
          console.log('fetchContacts failed: ' + ex);
          this.contactlist.contacts = [];
        })
      },

      pageChanged (page) {
        this.contactlist.pageno = page;
        this.fetchContacts();
      },

      addContact (contact) {
        this.$axios.post(CONF.ADD, contact)
        .then((res) => {
          this.contactlist.pageno = 1;
          this.fetchContacts();
        })
        .catch((ex) => {
          console.log('addContact failed: ' + ex);
        })
      },

      updateContact (contact) {
        this.$axios.put(CONF.UPDATE.replace('${no}', contact.no), contact)
        .then((res) => {
          this.fetchContacts();
        })
        .catch((ex) => {
          console.log('updateContact failed: ' + ex);
        })
      },

      fetchContactOne (no) {
        this.$axios.get(CONF.FETCH_ONE.replace('${no}', no))
        .then((res) => {
          this.contact = res.data;
        })
        .catch((ex) => {
          console.log('fetchContactOne failed: ' + ex);
        })
      },

      deleteContact (no) {
        this.$axios.delete(CONF.DELETE.replace('${no}', no))
        .then((res) => {
          this.fetchContacts();
        })
        .catch((ex) => {
          console.log('delete failed: ' + ex);
        })
      },

      updatePhoto (no, file) {
        let data = new FormData();
        data.append('photo', file);

        this.$axios.post(CONF.UPDATE_PHOTO.replace('${no}', no), data)
        .then((res) => {
          this.fetchContacts();
        })
        .catch((ex) => {
          console.log('updatePhoto failed: ' +ex);
        })
      }
    },
    watch: {

    }
  }
</script>

<style scoped>
  @import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

  #container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
