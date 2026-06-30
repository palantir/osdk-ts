import{R as i,O as M,j as y,M as v}from"./iframe-CbGjWaE9.js";import{P as D}from"./pdf-viewer-CjwEkuIb.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-M41rDuFE.js";import"./preload-helper-Dr_e-EC3.js";import"./PdfRenderer-BnAeCRcB.js";import"./index-CBgEgkUp.js";import"./PdfViewer-Dw_vp3_2.js";import"./PdfViewer.module.css-B0Z6B26T.js";import"./PdfViewerAnnotationLayer-yhQ2H8gD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C1oUb5dq.js";import"./PdfViewerOutlineSidebar-FbD2Y51g.js";import"./PdfViewerSidebarHeader-DPdaTGxX.js";import"./useBaseUiId-C1oTybC3.js";import"./useControlled-YJVh26kJ.js";import"./CompositeRoot-ouNtGkY9.js";import"./CompositeItem-DQHd7J4s.js";import"./ToolbarRootContext-5sfrL39e.js";import"./composite-9xQ7wI60.js";import"./svgIconContainer-DXdjlfUu.js";import"./PdfViewerSearchBar-C7pzGNbN.js";import"./chevron-up-BxhYczgp.js";import"./chevron-down-C-VmgSyY.js";import"./cross-Bnvgs-C9.js";import"./PdfViewerSidebar-DM-2Nbfk.js";import"./index-1vHmoPvv.js";import"./index-CAbAo81F.js";import"./index-DO9rp8Gp.js";import"./PdfViewerToolbar-doENCnAs.js";import"./Button-B-nIpohr.js";import"./chevron-right-Cra1aWT2.js";import"./Input-D7xT8msi.js";import"./minus-rHCxhHbP.js";import"./search-DFs1YmKn.js";import"./spin-cRorDClO.js";import"./error-W0_UbSku.js";import"./withOsdkMetrics-BquZO7dr.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const be=["Default"];export{a as Default,be as __namedExportsOrder,fe as default};
