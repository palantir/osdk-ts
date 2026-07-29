import{R as i,O as M,j as y,M as v}from"./iframe-DIdaxOLR.js";import{P as D}from"./pdf-viewer-CvS9x7Z4.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-D3CLRkNX.js";import"./preload-helper-Cv4ocMnk.js";import"./PdfRenderer-C7UowqxV.js";import"./index-GvktmLB_.js";import"./PdfViewer-uXvDiMpO.js";import"./PdfViewer.module.css-lWlHbVU2.js";import"./PdfViewerAnnotationLayer-DfUBq-6h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dj3scH5M.js";import"./PdfViewerOutlineSidebar-CDgnD4fH.js";import"./PdfViewerSidebarHeader-_KtwGEZF.js";import"./useBaseUiId-CcZqXfAF.js";import"./useControlled-BZuFqG0t.js";import"./CompositeRoot-B4h2fAot.js";import"./CompositeItem-C1xIO8ne.js";import"./ToolbarRootContext-B2mSYT1Q.js";import"./composite-DHu_NJDJ.js";import"./svgIconContainer-DafxEzdg.js";import"./PdfViewerSearchBar-DKGopbLr.js";import"./chevron-up-WP76rkwZ.js";import"./chevron-down-Ci9EmqSi.js";import"./cross-BQQs13Fl.js";import"./PdfViewerSidebar-CwxG7-MC.js";import"./index-cjkh6zoM.js";import"./index-ClaFPr-d.js";import"./index-D0nZjEcy.js";import"./PdfViewerToolbar-B9HOD0mt.js";import"./Button-CiOiDF7a.js";import"./chevron-right-CkX3-cxv.js";import"./Input-q_83M2dQ.js";import"./minus-BEFJu42F.js";import"./search-ByfIaBTs.js";import"./spin-Xa2keIPT.js";import"./error-CNRMUlL9.js";import"./withOsdkMetrics-CynymlIC.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
