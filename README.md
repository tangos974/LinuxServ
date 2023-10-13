# LinuxServ
Project of Creating a home server
This is mostly so I can keep track of what I have done.


DONE:

- Install ubuntu server (22.04) on old macbook (2014)

- Setup secure SSH over LAN from desktop and laptop into server:
        -  Disable direct root login (1.3)
        -  Use ssh keys (1.2)
        - Setup firewall rules (1.4)

- Make it so closing the lid of the macbook shuts off the screen but not the computer (2.1)
  
- Set static IP address (3.1, 3.2, 3.3)


- Install Web server software (2.3)

- Setup Firewall for distance ssh, client side (not needed)
  
- Setup Firewall for distance ssh, server side (3.7, 3.8, 1.4, 3.9, 3.10)

- SSh over web
  
        - Get external IP address (3.4)

        - Set Up Port Forwarding (3.5, 3.6)

TODO:

- Make site plan:
	- find plan sketching software? -> Wireframe! (5.1, 5.2)
	- Learn to use wireframe

- Setup Django! (4.1, 4.2, 4.3, 4.4, 4.7)
  	basic homepage: 4.6
  	blog: 4.5
        first deployment: 4.9, 4.7 pages 61 - 64
  
- Setup TCP Wrapper

- Learn about Ansible PLaybooks and use them (2.2)

- Configure DNS

- Auto updates?

- Enable HTTPS

- Create automatic backup routines

- Setup easy Monitoring for server stats

- Setup NAS over LAN (Samba?)





Sources:
- 1. Security:
             -  General security good practices: https://www.youtube.com/watch?v=fKuqYQdqRIs
             -  https://phoenixnap.com/kb/generate-setup-ssh-key-ubuntu
             -  https://www.howtogeek.com/828538/how-and-why-to-disable-root-login-over-ssh-on-linux/
             -  https://askubuntu.com/questions/115940/how-can-i-setup-ssh-so-that-it-is-restricted-to-my-local-network
- 2. Linux Sysadmin:
             -  AutoUpdates + physicalconstraints : https://www.mkeesey.me/posts/macbook-server/
             -  Ansible: https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_intro.html
             -  Install & configure apache: https://ubuntu.com/tutorials/install-and-configure-apache#1-overview
        
- 3. Networking:
             -  Example (deprecated) https://linuxopsys.com/topics/configure-static-ip-address-on-ubuntu-20-04
             -  Full Netplan guide: https://linuxconfig.org/netplan-network-configuration-tutorial-for-beginners
             -  Solving Deprecated warning netplan: https://unix.stackexchange.com/questions/681220/netplan-generate-gateway4-has-been-deprecated-use-default-routes-instead        
             -  External IP: https://linuxnightly.com/check-external-ip-from-linux-command-line/
             -  Port forwarding w/ my router: https://pratiquepc.fr/ouvrir-des-ports-sur-une-livebox/
             -  Difference TCP UDP: https://serverfault.com/questions/8981/what-is-the-difference-between-udp-and-tcp
             -  Server-side firewall setting using UFW: https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04
             -  UFW Port Forwarding: https://learnubuntu.com/allow-port-firewall/
             -  Ssh over LAN and WAN: https://www.techrepublic.com/article/how-to-allow-ssh-connections-from-lan-and-wan-on-different-ports/
             -  Debugging WAN: https://www.linuxquestions.org/questions/linux-server-73/ssh-not-working-on-wan-851977/

- 4. Backend Dev:
             - Django doc: https://docs.djangoproject.com/en/4.2/intro/tutorial01/
             - Django dir structure advice: https://stackoverflow.com/questions/22841764/best-practice-for-django-project-working-directory-structure Completed!
	     - Very basic portfolio step by step guide: https://realpython.com/get-started-with-django-1/ Completed!
     	     - Blog post of dev who built portfolio in Django: https://dev.to/randysteele/how-i-built-my-portfolio-site-in-django-part-1-53nk
     	     - Udemy course for django 2.2: https://www.udemy.com/course/try-django-2-2-python-web-development/learn/lecture/14258630#overview
     	     - Simple one page app: https://www.pythonstacks.com/blog/post/create-single-page-application/
     	     - book: https://djangoforbeginners.com/
     	     - reddit django learning recommandations: https://www.reddit.com/r/django/comments/m5qtdf/my_recommendation_to_learn_django/
             - deploy: https://realpython.com/django-nginx-gunicorn/

- 5. Frontend dev/web design:
  	     - Guide for mapping out future site: https://www.freecodecamp.org/news/what-is-a-wireframe-ux-design-tutorial-website/
             - Potential online tool: https://wireframe.cc/
     
