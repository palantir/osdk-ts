import{j as r}from"./iframe-Chczgz1L.js";import{O as b}from"./object-table-Bxdzz0hQ.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-DFZuJWVk.js";import{u as g}from"./useOsdkClient-D5LFzarX.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-Dse16TU5.js";import"./index-B9rruesR.js";import"./Dialog-BbtwTc0C.js";import"./cross-BNk5cXgp.js";import"./svgIconContainer-1jnQ2eo6.js";import"./useBaseUiId-BKJ7O9Ur.js";import"./InternalBackdrop-B43ScOJk.js";import"./composite-B4QMOHJZ.js";import"./index-Bt7ugu0N.js";import"./index-Dre7KrbC.js";import"./index-C3YdOJBa.js";import"./useEventCallback-iA9Hkw4u.js";import"./SkeletonBar-ygOk5JN2.js";import"./LoadingCell-DQtzbn-T.js";import"./ColumnConfigDialog-CMVJNphW.js";import"./DraggableList-DYyl4oJS.js";import"./search-wmopA8Vh.js";import"./Input-D4C3JvNi.js";import"./useControlled-BC2wgxgm.js";import"./Button-DeWrzdot.js";import"./small-cross-C5CmaSnd.js";import"./ActionButton-CZnKDqRc.js";import"./Checkbox-DgnWFNdK.js";import"./useValueChanged-BPFB-1jm.js";import"./CollapsiblePanel-MP_8oHdu.js";import"./MultiColumnSortDialog-Ca2t4niR.js";import"./MenuTrigger-DgS4uFoV.js";import"./CompositeItem-DywVVkGM.js";import"./ToolbarRootContext-BtrjEFZW.js";import"./getDisabledMountTransitionStyles-DNM4KQ8Z.js";import"./getPseudoElementBounds-kaI3yQ6b.js";import"./chevron-down-Btx-Kyg4.js";import"./index-DUC7giJN.js";import"./error-ChH6XIqA.js";import"./BaseCbacBanner-BhtkZFkf.js";import"./makeExternalStore-BDwYNInw.js";import"./Tooltip-BdxHwWMz.js";import"./PopoverPopup-C55rHfzo.js";import"./debounce-CXpZecUZ.js";import"./tick-CT8h7pmf.js";import"./DropdownField-BuaHdJat.js";import"./isEqual-D5otW-My.js";import"./withOsdkMetrics-C9LJ-x24.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
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
