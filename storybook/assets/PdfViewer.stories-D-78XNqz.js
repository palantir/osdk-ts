import{j as r,M as s}from"./iframe-DSXXK9ry.js";import{P as p}from"./pdf-viewer-BhmQbS1K.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-AN4J2rLC.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-A5nNkvbF.js";import"./index-BLfmppkP.js";import"./PdfViewer-qLFxup10.js";import"./PdfViewer.module.css-BGbJFBqB.js";import"./PdfViewerAnnotationLayer-cPn9OVTz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DcuXSVux.js";import"./PdfViewerOutlineSidebar-CUeIZbda.js";import"./PdfViewerSidebarHeader-CrUhaMdu.js";import"./useBaseUiId-DVrjiokY.js";import"./useControlled-BNp0JE7f.js";import"./CompositeRoot-De31HxAF.js";import"./CompositeItem-dShEfX7Q.js";import"./ToolbarRootContext-fozDRqMP.js";import"./composite-Dw9cnuQF.js";import"./svgIconContainer-Db6mLLA4.js";import"./PdfViewerSearchBar-BeUg8rys.js";import"./chevron-up-BgB0591G.js";import"./chevron-down-7ro0SSz_.js";import"./cross-BKiGnt2y.js";import"./PdfViewerSidebar-DNKdhcB5.js";import"./index-BleiAz0O.js";import"./index-C1mA0BVO.js";import"./index-DgE5owWV.js";import"./PdfViewerToolbar-DGbQ0aCa.js";import"./Button-ZlZC0ijy.js";import"./chevron-right-BW1xXy9e.js";import"./Input-BTsoeB1X.js";import"./search-Tcwj5nHq.js";import"./spin-P1jgxupE.js";import"./error-nGhhG5OL.js";import"./withOsdkMetrics-Ca3HcGIG.js";import"./makeExternalStore-Rp2wgwyK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
