import{R as i,O as M,j as y,M as v}from"./iframe-D4v6mEn1.js";import{P as D}from"./pdf-viewer-BBExQm_U.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DboLJKQP.js";import"./preload-helper-cbRsP1zf.js";import"./PdfRenderer-CZAfrSUQ.js";import"./index-BLDi9A8o.js";import"./PdfViewer-fRq_eeqo.js";import"./PdfViewer.module.css-cEDGEFqS.js";import"./PdfViewerAnnotationLayer-BlQcTwqC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CNLzEek3.js";import"./PdfViewerOutlineSidebar-B6153XHc.js";import"./PdfViewerSidebarHeader-cRJ9HX3c.js";import"./useBaseUiId-CX8CHixx.js";import"./useControlled-BKDEzTh5.js";import"./CompositeRoot-0Ef5K3qU.js";import"./CompositeItem-GxHcENsz.js";import"./ToolbarRootContext-BAVjkYc-.js";import"./composite-DD0mt_Ur.js";import"./svgIconContainer-mFWmX3qp.js";import"./PdfViewerSearchBar-CWaWnGM1.js";import"./chevron-up-CU5--HxA.js";import"./chevron-down-BeDHxKfS.js";import"./cross-BB7vr1gI.js";import"./PdfViewerSidebar-FJmnSkT6.js";import"./index-CoiNuHwc.js";import"./index-CdI-0PmB.js";import"./index-BLke2j3w.js";import"./PdfViewerToolbar-BsyEg6t8.js";import"./Button-DQB5SbCy.js";import"./chevron-right-DHZMEYAI.js";import"./Input-D7akk8dr.js";import"./minus-DhWxclpl.js";import"./search-BcKgp1Di.js";import"./spin-yolfsVnJ.js";import"./error-LJVwwXWD.js";import"./withOsdkMetrics-D-aEMXQf.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
