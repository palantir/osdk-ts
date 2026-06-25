import{R as i,O as M,j as y,M as v}from"./iframe-_XHTM6UU.js";import{P as D}from"./pdf-viewer-AdQgpg6K.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CR5wu_X6.js";import"./preload-helper-BBnybJj7.js";import"./PdfRenderer-HIsIYsWi.js";import"./index-8B2mYGEh.js";import"./PdfViewer-Cr3iVd4Y.js";import"./PdfViewer.module.css-Dt-zm_xi.js";import"./PdfViewerAnnotationLayer-C8UwrI1U.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CFXIzAJE.js";import"./PdfViewerOutlineSidebar-DNmAyPQq.js";import"./PdfViewerSidebarHeader-DaoC7GK1.js";import"./useBaseUiId-BHoGvOPs.js";import"./useControlled-BuiwuU3v.js";import"./CompositeRoot-BjrrTg3v.js";import"./CompositeItem-D4WQ74it.js";import"./ToolbarRootContext-8gUVkmA7.js";import"./composite-BfdPMGLv.js";import"./svgIconContainer-BVjbwhxm.js";import"./PdfViewerSearchBar-BLZH4KMp.js";import"./chevron-up-CU5P7ZVA.js";import"./chevron-down-BpfZLG0p.js";import"./cross-Xn6sJPFx.js";import"./PdfViewerSidebar-CX-EhpT8.js";import"./index-BiI1FMP5.js";import"./index-CHZhX3ae.js";import"./index-CRTtwqpm.js";import"./PdfViewerToolbar-COWzPoeQ.js";import"./Button-CcxaiM9H.js";import"./chevron-right-DM_xzMFV.js";import"./Input-BiJpVzL0.js";import"./minus-BEzCkezO.js";import"./spin-C3WaD8Ay.js";import"./error-BlpXzCus.js";import"./withOsdkMetrics-BEk-1wnA.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
