import{R as i,O as M,j as y,M as v}from"./iframe-CztIB_cg.js";import{P as D}from"./pdf-viewer-MSnuUi6G.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-AkxkkdDJ.js";import"./preload-helper-9510aCR5.js";import"./PdfRenderer-BTbaIDhg.js";import"./index-YBlbnmzA.js";import"./PdfViewer-DIJZqtLG.js";import"./PdfViewer.module.css-PY0JqHMo.js";import"./PdfViewerAnnotationLayer-DCN7i3sS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D99TCLeo.js";import"./PdfViewerOutlineSidebar-Ckku1SWe.js";import"./PdfViewerSidebarHeader-CxaEzpEB.js";import"./useBaseUiId-BJ0MEPf0.js";import"./useControlled-C-5UBO3y.js";import"./CompositeRoot-DLbNKb40.js";import"./CompositeItem-Bnlb5c5E.js";import"./ToolbarRootContext-BO8nOB22.js";import"./composite-EYIwQTl1.js";import"./svgIconContainer-Czw7psRv.js";import"./PdfViewerSearchBar-BG6AOlda.js";import"./chevron-up-DXEZKXnd.js";import"./chevron-down-BfDWteN8.js";import"./cross-DJXpoBp2.js";import"./PdfViewerSidebar-DBsM8I_E.js";import"./index-DcRIl6lS.js";import"./index-BgNIdcBm.js";import"./index-D9HOFOC-.js";import"./PdfViewerToolbar-CXJhgni8.js";import"./Button-B4hkWrRY.js";import"./chevron-right-CfWKLc9N.js";import"./Input-CyW38lcI.js";import"./minus-BSZbvGfL.js";import"./spin-Bf5JwEnJ.js";import"./error-BlRTFUd2.js";import"./withOsdkMetrics-CNKIlnNr.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
