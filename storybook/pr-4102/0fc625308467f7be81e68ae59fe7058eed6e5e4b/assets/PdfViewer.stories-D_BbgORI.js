import{j as r,M as s}from"./iframe-DfWRDQYW.js";import{P as p}from"./pdf-viewer-3ZBsOn_M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DqW1ap-Q.js";import"./preload-helper-DztOS3mh.js";import"./PdfViewer-BikxGXSo.js";import"./index-V0duYaOI.js";import"./BasePdfViewer-BoGVCjFc.js";import"./BasePdfViewer.module.css-pdviIOE-.js";import"./PdfViewerAnnotationLayer-CEagJrUB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8EpOeC4.js";import"./PdfViewerOutlineSidebar-ciQcl20h.js";import"./PdfViewerSidebarHeader-B54m3jby.js";import"./useBaseUiId-CnljwGyr.js";import"./useControlled-DFU1H8fZ.js";import"./CompositeRoot-0jTYfUgQ.js";import"./CompositeItem-Bp9WguhV.js";import"./ToolbarRootContext-DK75y1Fb.js";import"./composite-BvmRb9Ju.js";import"./svgIconContainer-Djmd0i7i.js";import"./PdfViewerSearchBar-R4fevATj.js";import"./chevron-up-DV0heeBN.js";import"./chevron-down-DTtuRFlq.js";import"./cross-MjnJnae7.js";import"./PdfViewerSidebar-DwI2y5SV.js";import"./index-BPZ3Sv03.js";import"./index-BhBX8uvN.js";import"./index-DMKrGJHK.js";import"./PdfViewerToolbar-CFzxqkFt.js";import"./Button-OSZ8RwgD.js";import"./chevron-right-BEHBYBC-.js";import"./Input-DIDbgdBf.js";import"./search-Dxbg6ZmT.js";import"./spin-ByRk7Dco.js";import"./error-D9hH3fxG.js";import"./withOsdkMetrics-BqT8ORay.js";import"./makeExternalStore-CSrQpL3l.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
