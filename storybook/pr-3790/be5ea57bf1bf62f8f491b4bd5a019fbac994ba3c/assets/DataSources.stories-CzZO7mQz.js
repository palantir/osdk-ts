import{j as r}from"./iframe-ByDFxc6J.js";import{O as b}from"./object-table-Cuy2ZZiP.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DDDOLEZB.js";import{u as g}from"./useOsdkClient-JE9b6z1p.js";import"./preload-helper-DsAHu_tG.js";import"./Table-Dam2UJf8.js";import"./index-COrglkMl.js";import"./Dialog-B78Wpb89.js";import"./cross-w3hxXSvD.js";import"./svgIconContainer-Cdl4pzn_.js";import"./useBaseUiId-D3OL8vQs.js";import"./InternalBackdrop-Csd2HTI2.js";import"./composite-Cwm4Y6dc.js";import"./index-B9guDax2.js";import"./index-Bc4TUgst.js";import"./index-Cgx_EwSA.js";import"./useEventCallback-1qwqMCsR.js";import"./SkeletonBar-aM6Fy1o8.js";import"./LoadingCell-CrYPPVgs.js";import"./ColumnConfigDialog-CoBUhc6u.js";import"./DraggableList-BhHyN4LT.js";import"./search-DGeK7c1j.js";import"./Input-DDk9us9b.js";import"./useControlled-Ci-xyBbB.js";import"./isEqual-CEnEbtP1.js";import"./isObject-D2Dn4sIt.js";import"./Button-m3_edGWL.js";import"./ActionButton-D4kwrLk3.js";import"./Checkbox-DCKmoS6E.js";import"./useValueChanged-wikWbzp7.js";import"./CollapsiblePanel-BO8NnsX2.js";import"./MultiColumnSortDialog-CkcyfWVn.js";import"./MenuTrigger-CH6rfP9H.js";import"./CompositeItem-2RzmuieV.js";import"./ToolbarRootContext-BIWqFB3h.js";import"./getDisabledMountTransitionStyles-DaSobCt5.js";import"./getPseudoElementBounds-CsMIwoWo.js";import"./chevron-down-E23zrlQO.js";import"./index-BBAKdsvN.js";import"./error-C9F6tpCk.js";import"./BaseCbacBanner-bWH910W6.js";import"./makeExternalStore-E2xf1luR.js";import"./Tooltip-BMhKILjF.js";import"./PopoverPopup-BXbrjj3M.js";import"./toNumber-BrMdeazV.js";import"./tick-BvsSQam1.js";import"./DropdownField-B4APnnSf.js";import"./withOsdkMetrics-Du8BWQXf.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
