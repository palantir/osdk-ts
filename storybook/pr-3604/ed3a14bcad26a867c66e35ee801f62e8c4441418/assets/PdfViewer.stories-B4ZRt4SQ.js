import{R as i,O as M,j as y,M as v}from"./iframe-DG6cRYaM.js";import{P as D}from"./pdf-viewer-CYIF-1IU.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-DBNQ8xM4.js";import"./preload-helper-ClUSx8-4.js";import"./PdfRenderer-Dyil2I0M.js";import"./index-C804Ldbo.js";import"./PdfViewer-DDw0Kl4w.js";import"./PdfViewer.module.css-WSD7yjqR.js";import"./PdfViewerAnnotationLayer-CFvAp8eT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8vNOeh8.js";import"./PdfViewerOutlineSidebar-Ds8bU4kE.js";import"./PdfViewerSidebarHeader-i_a1pdpl.js";import"./useBaseUiId-CKjHcJfl.js";import"./useControlled-DqYaKqHA.js";import"./CompositeRoot-DPpmgZ7Q.js";import"./CompositeItem-BImjti7u.js";import"./ToolbarRootContext-DsCp619J.js";import"./composite-DoPO_86w.js";import"./svgIconContainer-C2bwKny8.js";import"./PdfViewerSearchBar-CCuC-OzJ.js";import"./chevron-up-BabFUzBi.js";import"./chevron-down-C0uqVz-l.js";import"./cross-hkUnUAaY.js";import"./PdfViewerSidebar-NsdReG1Y.js";import"./index-pcoRf41n.js";import"./index-C5l-7pVR.js";import"./index-9K3AdnqX.js";import"./PdfViewerToolbar-lbosIR8-.js";import"./Button-CihwDe7p.js";import"./chevron-right-bAor3kSG.js";import"./Input-tm7ZpwZm.js";import"./minus-A8jz_bS4.js";import"./search-DbgJzrKA.js";import"./spin-Cw4t8_Lv.js";import"./error-vOwQsFJ7.js";import"./withOsdkMetrics-Bux00-k2.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
