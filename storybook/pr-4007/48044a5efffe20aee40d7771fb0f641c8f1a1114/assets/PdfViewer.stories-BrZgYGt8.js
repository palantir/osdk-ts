import{j as r,M as s}from"./iframe-CZuJk2mr.js";import{P as p}from"./pdf-viewer-BiEF8F8x.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-by5Tp5Ms.js";import"./preload-helper-D-OLzWEl.js";import"./PdfViewer-CnfXTE9D.js";import"./index-DDksSLCw.js";import"./BasePdfViewer-BiArlcg7.js";import"./BasePdfViewer.module.css-IXATf_fR.js";import"./PdfViewerAnnotationLayer-CuC5KUmu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQlzHIhI.js";import"./PdfViewerOutlineSidebar-D6GREE8k.js";import"./PdfViewerSidebarHeader-JITQ5vz4.js";import"./useBaseUiId-oT1O9JCt.js";import"./useControlled-Bv0HDfXo.js";import"./CompositeRoot-CvipESF0.js";import"./CompositeItem-CuTnwCK-.js";import"./ToolbarRootContext-DCv4bsB-.js";import"./composite-sxVd7y-x.js";import"./svgIconContainer-D_03U5sn.js";import"./PdfViewerSearchBar-rCrw04mI.js";import"./chevron-up-Cbd9982B.js";import"./chevron-down-CxdBBEPV.js";import"./cross-cMU2e2iq.js";import"./PdfViewerSidebar-BG9braDV.js";import"./index-J1vMkA6U.js";import"./index-Db51obv8.js";import"./index-CwqMcoP9.js";import"./PdfViewerToolbar-VkxqckJA.js";import"./Button-8AWdZuBH.js";import"./chevron-right-CC6Kkhxn.js";import"./Input-CRD7X-5R.js";import"./search-2YrO29UM.js";import"./spin-Ct3myQC5.js";import"./error-BX22AwHJ.js";import"./withOsdkMetrics-D7T9qYjs.js";import"./makeExternalStore-BxStD-Ll.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
