import{j as r,M as s}from"./iframe-CdV0oMQK.js";import{P as p}from"./pdf-viewer-CyUXN_VZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DIfu3M3q.js";import"./preload-helper-DYnb1G2Z.js";import"./PdfViewer-BOzI2__4.js";import"./index-CDOi726F.js";import"./BasePdfViewer-_YUkL8Ip.js";import"./BasePdfViewer.module.css-1R8mPqgO.js";import"./PdfViewerAnnotationLayer-4jpR5FVz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kwlfEsmr.js";import"./PdfViewerOutlineSidebar-QS-hyzlS.js";import"./PdfViewerSidebarHeader-CmdP3J5z.js";import"./useBaseUiId-qoWBNaJE.js";import"./useControlled-DmnLTdeY.js";import"./CompositeRoot-rbFLBB4H.js";import"./CompositeItem-BGsDUgBO.js";import"./ToolbarRootContext-sN3AAwIa.js";import"./composite-B01ubv1I.js";import"./svgIconContainer-Db8D1oyf.js";import"./PdfViewerSearchBar-B6bEhhbm.js";import"./chevron-up-D67n3SMa.js";import"./chevron-down-CAimFdfR.js";import"./cross-DjfMhKqA.js";import"./PdfViewerSidebar-BDDKVltQ.js";import"./index-C2SvAwVc.js";import"./index-DgVn8Y3N.js";import"./index-CtEXs2m1.js";import"./PdfViewerToolbar-JUmuqYNY.js";import"./Button-PcrXfoGH.js";import"./chevron-right-BCYkaIt3.js";import"./Input-DcsAtJ_5.js";import"./search-KAXH_KdC.js";import"./spin-D9MBwagb.js";import"./error-DatCfw_J.js";import"./withOsdkMetrics-tj5br0ur.js";import"./makeExternalStore-Ble7iOu_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
