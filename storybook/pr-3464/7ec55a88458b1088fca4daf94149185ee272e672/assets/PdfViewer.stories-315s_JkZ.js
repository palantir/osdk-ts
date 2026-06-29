import{R as i,O as M,j as y,M as v}from"./iframe-DgoyKrMA.js";import{P as D}from"./pdf-viewer-C25mRs8n.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B2cgo-7D.js";import"./preload-helper-B0nQfTcI.js";import"./PdfRenderer-CMwzyN43.js";import"./index-AaUdncAY.js";import"./PdfViewer-CFy9eu2G.js";import"./PdfViewer.module.css-CNr2eY-6.js";import"./PdfViewerAnnotationLayer-ihrLcwed.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5Ntd6Ts7.js";import"./PdfViewerOutlineSidebar-BCuqXeKw.js";import"./PdfViewerSidebarHeader-RcPDEgLS.js";import"./useBaseUiId-DuSsdC-V.js";import"./useControlled-Bf5Je3fS.js";import"./CompositeRoot-Ct4C5fbl.js";import"./CompositeItem-Cr2thBXg.js";import"./ToolbarRootContext-B2lXsL_Q.js";import"./composite-B2UAnxY_.js";import"./svgIconContainer-CjREsQum.js";import"./PdfViewerSearchBar-B7F2_zEI.js";import"./chevron-up-hl68Td60.js";import"./chevron-down-DPt7J5eG.js";import"./cross-DJcC46zn.js";import"./PdfViewerSidebar-CqIMuhZ0.js";import"./index-BgnwFznl.js";import"./index-ClrSkKoK.js";import"./index-ivmBoQou.js";import"./PdfViewerToolbar-CSP4TJtM.js";import"./Button-CnrRhfIU.js";import"./chevron-right-DwvC9L_o.js";import"./Input-BwILyUm2.js";import"./minus-CI3B_Ta0.js";import"./search-DV7KFLuZ.js";import"./spin-CATvyeqF.js";import"./error-B4hvPJmm.js";import"./withOsdkMetrics-JOv1iZ_z.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
