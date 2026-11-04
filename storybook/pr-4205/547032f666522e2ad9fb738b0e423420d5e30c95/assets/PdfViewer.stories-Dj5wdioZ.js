import{j as r,M as s}from"./iframe-DxLh3JbF.js";import{P as p}from"./pdf-viewer-B41Pvmws.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQ8cOIyJ.js";import"./preload-helper-CtguWtZv.js";import"./PdfViewer-BviQ8SWn.js";import"./index-DKwvuwmq.js";import"./BasePdfViewer-sLduK4s3.js";import"./BasePdfViewer.module.css-DmHajALG.js";import"./PdfViewerAnnotationLayer-BYQLT731.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-1p8xoM.js";import"./PdfViewerOutlineSidebar-D4sNDZ-W.js";import"./PdfViewerSidebarHeader-D0ZYyUIJ.js";import"./useBaseUiId-C0U6w1uv.js";import"./useControlled-CezKSMA-.js";import"./CompositeRoot-DvjsVfUo.js";import"./CompositeItem-DzeDqabA.js";import"./ToolbarRootContext-BeQWjnov.js";import"./composite-BnT-JfoG.js";import"./svgIconContainer-DVtbzSvb.js";import"./PdfViewerSearchBar-dYBYbBdY.js";import"./chevron-up-B0ogPpOy.js";import"./chevron-down-C2jGd_Ay.js";import"./cross-Bq7Vu5_q.js";import"./PdfViewerSidebar-CB3uveat.js";import"./index-2HlltdC-.js";import"./index-lMNDx7C7.js";import"./index-CcJor5Xx.js";import"./PdfViewerToolbar-BBmHGoGl.js";import"./Button-DkhW4pYf.js";import"./chevron-right-C4ZuRB6U.js";import"./Input-Be22pwJh.js";import"./search-6md9DSSP.js";import"./spin-CD_Xx4t8.js";import"./error-DE0gSpIQ.js";import"./withOsdkMetrics-99fBVbxl.js";import"./makeExternalStore-CIacUB7Y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
