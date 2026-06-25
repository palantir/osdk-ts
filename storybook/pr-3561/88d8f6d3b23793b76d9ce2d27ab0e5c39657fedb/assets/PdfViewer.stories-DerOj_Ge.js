import{R as i,O as M,j as y,M as v}from"./iframe-2EVrp-mi.js";import{P as D}from"./pdf-viewer-BS-gWCes.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-B8HE06hd.js";import"./preload-helper-YRis2Ym7.js";import"./PdfRenderer-DhOy_tFN.js";import"./index-BVpkkEeQ.js";import"./PdfViewer-Bs3kaddI.js";import"./PdfViewer.module.css-g5HxGZ8H.js";import"./PdfViewerAnnotationLayer-C7LPYpDy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVGuGPHW.js";import"./PdfViewerOutlineSidebar-BXQ8UJ2U.js";import"./PdfViewerSidebarHeader-C_s4XD0W.js";import"./useBaseUiId-t6acaRdi.js";import"./useControlled-B4u0Eh1Z.js";import"./CompositeRoot-CwrpCjDj.js";import"./CompositeItem-Br6oMPl4.js";import"./ToolbarRootContext-DzPMSIil.js";import"./composite-CSVV4gWL.js";import"./svgIconContainer-DrI2HUjy.js";import"./PdfViewerSearchBar-Cnzxyi_V.js";import"./chevron-up-DG1U4hs4.js";import"./chevron-down-BQGOdiFM.js";import"./cross-XSlHEjDw.js";import"./PdfViewerSidebar-CJ6KBCjw.js";import"./index-D2N50O6x.js";import"./index-BzCPAjgt.js";import"./index-SWSws8M4.js";import"./PdfViewerToolbar-BF-nJCnJ.js";import"./Button-t7F2qGe2.js";import"./chevron-right-CsX-87x9.js";import"./Input-CKfnIaJL.js";import"./minus-jgv5sN80.js";import"./spin-CboBK7UV.js";import"./error-DiTum4fs.js";import"./withOsdkMetrics-Bs5PWQvO.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
