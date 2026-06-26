import{R as i,O as M,j as y,M as v}from"./iframe-BtZWjUqs.js";import{P as D}from"./pdf-viewer-DQAz_SrY.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DqsgJNUf.js";import"./preload-helper-Dmj2NsCZ.js";import"./PdfRenderer-9YaLUkXA.js";import"./index-ldha3fmM.js";import"./PdfViewer-BHYNyEP9.js";import"./PdfViewer.module.css-BigIzvqx.js";import"./PdfViewerAnnotationLayer-VpLGswSU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-jkUAK-cF.js";import"./PdfViewerOutlineSidebar-DNMP9pXf.js";import"./PdfViewerSidebarHeader-DorIg2UJ.js";import"./useBaseUiId-Dz-x0qpO.js";import"./useControlled-CWWAWSOd.js";import"./CompositeRoot-CBLv-tRx.js";import"./CompositeItem-DjVj-MDz.js";import"./ToolbarRootContext-CcKTxivH.js";import"./composite-C6wkvaKL.js";import"./svgIconContainer-CiFBfueQ.js";import"./PdfViewerSearchBar-DHu-caIA.js";import"./chevron-up-Cgu06axA.js";import"./chevron-down-vr0QYyBS.js";import"./cross-CxvnJrvU.js";import"./PdfViewerSidebar-CgDThqk3.js";import"./index-2cfK-_Ux.js";import"./index-Uj3vbn94.js";import"./index-CY6yU0Z6.js";import"./PdfViewerToolbar-BEY3tV00.js";import"./Button-Bqqo-hFp.js";import"./chevron-right-BxRtN7OX.js";import"./Input-Bzk3p84E.js";import"./minus-B0K6RA_m.js";import"./spin-BpgGj0pE.js";import"./error-C1YcRusv.js";import"./withOsdkMetrics-e6sLi_Zx.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
