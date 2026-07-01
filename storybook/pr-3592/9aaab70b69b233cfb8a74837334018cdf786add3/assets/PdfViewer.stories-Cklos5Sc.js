import{R as i,O as M,j as y,M as v}from"./iframe-BuvMsZtG.js";import{P as D}from"./pdf-viewer-kgP6OimL.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DZlgS07u.js";import"./preload-helper-DkO06LBG.js";import"./PdfRenderer-R4Uy7Rlz.js";import"./index-BrH84VTy.js";import"./PdfViewer-E8PAL66L.js";import"./PdfViewer.module.css-C_xbprzj.js";import"./PdfViewerAnnotationLayer-Cj6SieSn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrD2BEcn.js";import"./PdfViewerOutlineSidebar-D7XT8TmX.js";import"./PdfViewerSidebarHeader-BCJ_mJx_.js";import"./useBaseUiId-DAlUuicx.js";import"./useControlled-vkUbBAp-.js";import"./CompositeRoot-DPtYdN5O.js";import"./CompositeItem-BFnfxBpM.js";import"./ToolbarRootContext-DVV2ELei.js";import"./composite-DCKRM-n_.js";import"./svgIconContainer-DLBvWme8.js";import"./PdfViewerSearchBar-uQ8IdRkB.js";import"./chevron-up-DdPd6DXx.js";import"./chevron-down-Zorp05f6.js";import"./cross-DeDEJYzH.js";import"./PdfViewerSidebar-DqDHe5Tf.js";import"./index-BYgqtpqf.js";import"./index-3iSIe5o6.js";import"./index-Cum23KRi.js";import"./PdfViewerToolbar-BoVj-Y0h.js";import"./Button-zjZgPub4.js";import"./chevron-right-DsEXWbnG.js";import"./Input-CHzA_gvK.js";import"./minus-DO1F4fVU.js";import"./search-BcBio4BJ.js";import"./spin-D5JH-uU5.js";import"./error-DkdoCXm0.js";import"./withOsdkMetrics-BaqLod3I.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
