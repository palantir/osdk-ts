import{R as i,O as M,j as y,M as v}from"./iframe-BBjxdfoH.js";import{P as D}from"./pdf-viewer-D2jTl4SW.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-CL5NyPse.js";import"./preload-helper-mCdvOkgg.js";import"./PdfRenderer-DluSNmh2.js";import"./index-CXpfL-al.js";import"./PdfViewer-BoV1dbqf.js";import"./PdfViewer.module.css-BnS6zOO5.js";import"./PdfViewerAnnotationLayer-DIHr2CSr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWw52FGC.js";import"./PdfViewerOutlineSidebar-BULBw-5h.js";import"./PdfViewerSidebarHeader-CYmmqvJF.js";import"./useBaseUiId-CODNe0dC.js";import"./useControlled-CWLh4UCS.js";import"./CompositeRoot-DKdip5Sq.js";import"./CompositeItem-F2YNVfIG.js";import"./ToolbarRootContext-vxBZ3l3m.js";import"./composite-Q-RZA8KT.js";import"./svgIconContainer-Dl_6Ak-k.js";import"./PdfViewerSearchBar-O34lFf4k.js";import"./chevron-up-LM0Z9gnv.js";import"./chevron-down-BJj78C4_.js";import"./cross-BpOK24Em.js";import"./PdfViewerSidebar-DUpQ5JKe.js";import"./index-B96dIsgt.js";import"./index-CktCWn9i.js";import"./index-GmPMBlgy.js";import"./PdfViewerToolbar-CNOaWv7h.js";import"./Button-CMQoOM5E.js";import"./chevron-right-BDqqc5Hr.js";import"./Input-slapFlw6.js";import"./minus-BeRbPymu.js";import"./search-B9-C2B7m.js";import"./spin-CIUl5ER5.js";import"./error-D35UHXxk.js";import"./withOsdkMetrics-Q-YLxusW.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
