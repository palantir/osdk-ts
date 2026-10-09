import{j as r,M as s}from"./iframe-BBEsiyhw.js";import{P as p}from"./pdf-viewer-CPY0Q9n4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPOs0gji.js";import"./preload-helper-BmblPu1v.js";import"./PdfViewer-C51wmiTv.js";import"./index-ClnGgge0.js";import"./BasePdfViewer-B6nerRcV.js";import"./BasePdfViewer.module.css-D1GiQCBg.js";import"./PdfViewerAnnotationLayer-BQCzRYEc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_YOb45y.js";import"./PdfViewerOutlineSidebar-2poI-XQB.js";import"./PdfViewerSidebarHeader-DAT62o_z.js";import"./useBaseUiId-B3oGhb6T.js";import"./useControlled-BD3zVyK-.js";import"./CompositeRoot-CnObT3Kn.js";import"./CompositeItem-BDqi7Zsx.js";import"./ToolbarRootContext-BkzilyRu.js";import"./composite-CotiRSPy.js";import"./svgIconContainer-BftRkbDY.js";import"./PdfViewerSearchBar-BQGzolzI.js";import"./chevron-up-Ds91aZIB.js";import"./chevron-down-DqgLlLlb.js";import"./cross-D8hf1lyL.js";import"./PdfViewerSidebar-CUAFwtG_.js";import"./index-BK2KAOIj.js";import"./index-BjsoHb5F.js";import"./index-DalDu3QI.js";import"./PdfViewerToolbar-Da0psH4y.js";import"./Button-C37aiOXg.js";import"./chevron-right-C4sXDh5_.js";import"./Input-BCyCFswy.js";import"./search-CUaj7sUK.js";import"./spin-DNQTtylm.js";import"./error-DhmHSkrO.js";import"./withOsdkMetrics-J9vpDrpe.js";import"./makeExternalStore-oMnnQc1q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
