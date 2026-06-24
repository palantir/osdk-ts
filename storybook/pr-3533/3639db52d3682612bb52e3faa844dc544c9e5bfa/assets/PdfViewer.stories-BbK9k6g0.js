import{R as i,O as M,j as y,M as v}from"./iframe-BAukKYpt.js";import{P as D}from"./pdf-viewer-D8uLKPf6.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DO-Jcp6U.js";import"./preload-helper-DEP8ArnM.js";import"./PdfRenderer-5p1Ykb4Y.js";import"./index-BpChn7s-.js";import"./PdfViewer-D46V4rbu.js";import"./PdfViewer.module.css-uU9yOlcR.js";import"./PdfViewerAnnotationLayer-3VEH-NX7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEqa93cK.js";import"./PdfViewerOutlineSidebar-OMAfom45.js";import"./PdfViewerSidebarHeader-Cb-u8-8u.js";import"./useBaseUiId-RhabLNAA.js";import"./useControlled-ThDL_X9N.js";import"./CompositeRoot-CKWmh48I.js";import"./CompositeItem-BQ57aeFJ.js";import"./ToolbarRootContext-C1ndUy9w.js";import"./composite-D8lj-V4B.js";import"./svgIconContainer-Cdktco_5.js";import"./PdfViewerSearchBar-Dd644uGd.js";import"./chevron-up-BHxgg-92.js";import"./chevron-down-u5jwuTcd.js";import"./cross-Wt5P4vcF.js";import"./PdfViewerSidebar-DqbOw6Z_.js";import"./index-Bc23yeam.js";import"./index-1wXDZdG-.js";import"./index-BpvJbmcH.js";import"./PdfViewerToolbar-BSvm-SJ6.js";import"./Button-CPPNdecC.js";import"./chevron-right-BFXfDskT.js";import"./Input-DJoA583-.js";import"./minus-mKlcJW5w.js";import"./spin-BR23O1_1.js";import"./error-DdebbK9k.js";import"./withOsdkMetrics-z4L-EvAK.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
