let f;
let q,w,e,r,t,y,u,i,o,p;

function change(){
    f=document.getElementById("type").value;
    if(f=="cs"){
        q="Cashment window 1 sash with espage";
        w="Cashment window 2 sash with espage";
        e="cashment fixed window with single glass";
        r="cashment 2 part fixed";
        t="cashment door";
        y="Ventilator";
        u="--";
        i="--";
        o="--";
        p="--";

        document.getElementById("n1").innerText=q;
        document.getElementById("n2").innerText=w;
        document.getElementById("n3").innerText=e;
        document.getElementById("n4").innerText=r;
        document.getElementById("n5").innerText=t;
        document.getElementById("n6").innerText=y;
        document.getElementById("n7").innerText=u;
        document.getElementById("n8").innerText=i;
        document.getElementById("n9").innerText=o;
        document.getElementById("n10").innerText=p;
    }
    else{
        q="2 Track Sliding Window";
        w="2.5 Track sliding window";
        e="3 Track sliding Window with mesh";
        r="2 track slinding 3 sash";
        t="2 track slinding window 4 sash";
        y="3 track slinding window with 3 sash";
        u="3 track slinding window with 4 sash and 2 mesh sash";
        i="--";
        o="3 track sliding door with espage and mosquito mash";
        p="3 Track sliding door with 4 sash,2 mesh and espage";

        document.getElementById("n1").innerText=q;
        document.getElementById("n2").innerText=w;
        document.getElementById("n3").innerText=e;
        document.getElementById("n4").innerText=r;
        document.getElementById("n5").innerText=t;
        document.getElementById("n6").innerText=y;
        document.getElementById("n7").innerText=u;
        document.getElementById("n8").innerText=o;
        document.getElementById("n9").innerText=p;
        document.getElementById("n10").innerText=i;
        
    }
}

function myfunction(){
    let k=document.getElementById("chk").value;
    let c;
    var l=parseFloat(document.getElementById("length").value);
    var b=parseFloat(document.getElementById("breadth").value);
    
    if(f=="cs"){
        if(k==1){
            let frame=(2*l+2*b)*304.00;
            frame=frame.toFixed(2);
			let sash=(2*l+2*b)*349.00;
            sash=sash.toFixed(2);
			let beed=(2*l+2*b)*63.00;
            beed=beed.toFixed(2);
			let hardware=400;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);

			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",q);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==2){
            let frame=(2*l+2*b)*304.00;
            frame=frame.toFixed(2);
			let sash=(2*l+4*b)*349.00;
            sash=sash.toFixed(2);
			let beed=(2*l+4*b)*63.00;
            beed=beed.toFixed(2);
            let transom=b*289;
			let hardware=800;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);

            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(transom);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",w);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
            
        }
        else if(k==3){
            let frame=(2*l+2*b)*304.00;
            frame=frame.toFixed(2);
            
			// let sash=(2*l+2*b)*209.00;
            // sash=sash.toFixed(2);
			let beed=(2*l+2*b)*63.00;
            beed=beed.toFixed(2);
            
            
			// let hardware=545;
			
			let feet=(l*b)*10.762;            
            feet=feet.toFixed(2);
            
            let miss=(feet*20);
            miss=miss.toFixed(2);
            
			let glass=(feet*84);
            glass=glass.toFixed(2);
            
			let labour=(feet*50);
            labour=labour.toFixed(2);
            
            const mat=parseFloat(frame)+parseFloat(beed)+parseFloat(glass);
            //mat=mat.toFixed(2);
            
            const total=parseFloat(mat)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);
        
            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);

            
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",e);
            localStorage.setItem("frame",frame);
            localStorage.setItem("beed",beed);
            
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==4){
            let frame=(2*l+2*b)*304.00;
            frame=frame.toFixed(2);
            
			// let sash=(2*l+2*b)*209.00;
            // sash=sash.toFixed(2);
			let beed=(2*l+4*b)*57.00;
            beed=beed.toFixed(2);
            let transom=b*289;
			// let hardware=545;
			
			let feet=(l*b)*10.762;            
            feet=feet.toFixed(2);
            
            let miss=(feet*20);
            miss=miss.toFixed(2);
            
			let glass=(feet*84);
            glass=glass.toFixed(2);
            
			let labour=(feet*50);
            labour=labour.toFixed(2);
            
            const mat=parseFloat(frame)+parseFloat(transom)+parseFloat(beed)+parseFloat(glass);
            //mat=mat.toFixed(2);
            
            const total=parseFloat(mat)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);
        
            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);

            
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",r);
            localStorage.setItem("frame",frame);
            localStorage.setItem("beed",beed);
            
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp); 
        }
        else if(k==5){
            let frame=(2*l+2*b)*304.00;
            frame=frame.toFixed(2);
			let sash=(2*l+2*b)*483.00;
            sash=sash.toFixed(2);
			let beed=(2*l+2*b)*63.00;
            beed=beed.toFixed(2);
			let hardware=2320;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=(feet*25);
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",t);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==6){
            let frame=(2*l+2*b)*304.00;
            frame=frame.toFixed(2);
			let sash=(2*l+2*(b-0.4))*349;
            sash=sash.toFixed(2);
			let beed=(2*l+2*b)*57.00;
            beed=beed.toFixed(2);
            let transom=l*289;
			let hardware=240;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(transom);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",y);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
    }
    else if(f=="sw"){
        if(k==1){
            let frame=(2*l+2*b)*278.00;
            frame=frame.toFixed(2);
			let sash=(2*l+4*b)*260.00;
            sash=sash.toFixed(2);
			let beed=(2*l+4*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=200;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",q);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==2){
            let frame=(2*l+2*b)*349.00;
            frame=frame.toFixed(2);
			let sash=(3*l+6*b)*260.00;
            sash=sash.toFixed(2);
			let beed=(3*l+6*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=250;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            let mesh=feet*7.5;
            mesh=mesh.toFixed(2);

            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour)+parseFloat(mesh);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",w);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==3){
            let frame=(2*l+2*b)*424.00;
            frame=frame.toFixed(2);
			let sash=(3*l+6*b)*260.00;
            sash=sash.toFixed(2);
			let beed=(3*l+6*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=250;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            let mesh=feet*7.5;
            mesh=mesh.toFixed(2);

            let interlock=2*b*44.00;
            interlock=interlock.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(interlock);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour)+parseFloat(mesh);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",e);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==4){
            let frame=(2*l+2*b)*278.00;
            frame=frame.toFixed(2);
			let sash=(2*l+6*b)*260.00;
            sash=sash.toFixed(2);
			let beed=(2*l+6*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=200;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            

            
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",r);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==5){
            let frame=(2*l+2*b)*424.00;
            frame=frame.toFixed(2);
			let sash=(2*l+8*b)*260.00;
            sash=sash.toFixed(2);
			let beed=(2*l+8*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=300;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            

            let interlock=4*b*44.00;
            interlock=interlock.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(interlock);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",t);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==6){
            let frame=(2*l+2*b)*424.00;
            frame=frame.toFixed(2);
			let sash=(3*l+8*b)*316.00;
            sash=sash.toFixed(2);
			let beed=(3*l+8*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=1050;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            

            let interlock=4*b*47;
            interlock=interlock.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(interlock);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",y);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==7){
            let frame=(2*l+2*b)*424.00;
            frame=frame.toFixed(2);
			let sash=(3*l+12*b)*316.00;
            sash=sash.toFixed(2);
			let beed=(3*l+12*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=1050;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            let mesh=feet*7.5;
            mesh=mesh.toFixed(2);

            let interlock=4*b*47;
            interlock=interlock.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(interlock);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour)+parseFloat(mesh);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",u);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==8){
            let frame=(2*l+2*b)*424.00;
            frame=frame.toFixed(2);
			let sash=(2*l+4*b)*316.00;
            sash=sash.toFixed(2);
            let ms=(l+2*b)*236.00;
            ms=ms.toFixed(2);
			let beed=(3*l+6*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=1050;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            let mesh=feet*7.5;
            mesh=mesh.toFixed(2);

            let interlock=2*b*47.00;
            interlock=interlock.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(interlock)+parseFloat(ms);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour)+parseFloat(mesh);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",o);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
        else if(k==9){
            let frame=(2*l+2*b)*424.00;
            frame=frame.toFixed(2);
			let sash=(3*l+12*b)*316.00;
            sash=sash.toFixed(2);
            // let ms=(l+4*b)*161.00;
            // ms=ms.toFixed(2);
			let beed=(3*l+12*b)*41.00;
            beed=beed.toFixed(2);
			let hardware=1050;
			
			let feet=(l*b)*10.762;
            feet=feet.toFixed(2);
            let miss=feet*25;
            miss=miss.toFixed(2);
			let glass=(feet*84);
            glass=glass.toFixed(2);
			let labour=(feet*50);
            labour=labour.toFixed(2);

            let mesh=feet*7.5;
            mesh=mesh.toFixed(2);

            let interlock=4*b*44;
            interlock=interlock.toFixed(2);
            const mat=parseFloat(frame)+parseFloat(sash)+parseFloat(beed)+ parseFloat(glass)+parseFloat(interlock);
            //mat=mat.toFixed(2);
            const total=parseFloat(mat)+parseFloat( hardware)+parseFloat(miss)+parseFloat(labour)+parseFloat(mesh);
            
            //total=total.toFixed(2);
            let prsqm=total/feet;
            prsqm=prsqm.toFixed(2);

            let profit=(prsqm*0.2);
            profit=profit.toFixed(2);
            let prsqmcost=parseFloat(profit)+parseFloat(prsqm);
            let sp=parseFloat(prsqmcost)*parseFloat(feet);
            sp=sp.toFixed(2);
            localStorage.setItem("name",p);
            localStorage.setItem("frame",frame);
            localStorage.setItem("sash",sash);
            localStorage.setItem("beed",beed);
            localStorage.setItem("hardware",hardware);
            localStorage.setItem("miss",miss);
            localStorage.setItem("feet",feet);
            localStorage.setItem("glass",glass);
            localStorage.setItem("labour",labour);
            localStorage.setItem("mat",mat);
            localStorage.setItem("total",total);
            localStorage.setItem("persqm",prsqm);
            localStorage.setItem("persqmcost",prsqmcost);
            localStorage.setItem("sp",sp);
        }
    }
    window.open('res.html');
}