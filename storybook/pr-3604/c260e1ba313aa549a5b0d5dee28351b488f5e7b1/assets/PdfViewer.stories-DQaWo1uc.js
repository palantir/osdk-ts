import{R as i,O as M,j as y,M as v}from"./iframe-DCYRL4H9.js";import{P as D}from"./pdf-viewer-Db-VzsZe.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-COlEuZuC.js";import"./preload-helper-DhNa-SfY.js";import"./PdfRenderer-DrVIW7eM.js";import"./index-BadqSvra.js";import"./PdfViewer-3QyimsiZ.js";import"./PdfViewer.module.css-B45kdcPQ.js";import"./PdfViewerAnnotationLayer-jgzSqyLQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-pIp8YH6J.js";import"./PdfViewerOutlineSidebar-DpziP7L-.js";import"./PdfViewerSidebarHeader-BpqOAWzA.js";import"./useBaseUiId-C40ePuZs.js";import"./useControlled-DQQBI8PS.js";import"./CompositeRoot-D56VxhCS.js";import"./CompositeItem-Dr8bPHFw.js";import"./ToolbarRootContext-BkZzFyoX.js";import"./composite-DP2g4oyM.js";import"./svgIconContainer-yymEYtFs.js";import"./PdfViewerSearchBar-MdY5uPD8.js";import"./chevron-up-BepBSp3n.js";import"./chevron-down-DjFwRC7H.js";import"./cross-MTDmMIYo.js";import"./PdfViewerSidebar-BW2q7w8V.js";import"./index-19uHMXQL.js";import"./index-0HeaUW6Z.js";import"./index-DseVM04U.js";import"./PdfViewerToolbar-CNgIepHn.js";import"./Button-DY07Ql1q.js";import"./chevron-right-C5J1Co1T.js";import"./Input-CytECBC7.js";import"./minus-Driyk1S9.js";import"./search-DVQZ78U2.js";import"./spin-BVPUqLIc.js";import"./error-CqjxyM1J.js";import"./withOsdkMetrics-wzS6tx1u.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const fe={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
