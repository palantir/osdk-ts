import{j as i}from"./iframe-CzN2QreI.js";import{O as p}from"./object-table-BhXf9gA2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DdSSq3_E.js";import"./preload-helper-BXZu3mB8.js";import"./Table-D-s_rfWN.js";import"./index-Bj6GQi9V.js";import"./Dialog-vvjS-bkJ.js";import"./cross-B7QKnjh-.js";import"./svgIconContainer-DJR2Y9nG.js";import"./useBaseUiId-XpXvVpGq.js";import"./InternalBackdrop-t9svslOk.js";import"./composite-CvZGZMr_.js";import"./index-CP-vzmXq.js";import"./index-_8V292Ph.js";import"./index-LOsE3mZd.js";import"./useEventCallback-Bm9HIaTl.js";import"./SkeletonBar-CLEVVnPB.js";import"./LoadingCell-Bq12_82I.js";import"./ColumnConfigDialog-CeXz8J4h.js";import"./DraggableList-OvooNtbU.js";import"./search-CBwzahSV.js";import"./Input-CegjBPQP.js";import"./useControlled-DC4k4z6-.js";import"./Button-CdEdBbWo.js";import"./small-cross-BfZaK0QA.js";import"./ActionButton-DTFbCjfZ.js";import"./Checkbox-D8x43nJp.js";import"./useValueChanged-CvEwy5iK.js";import"./CollapsiblePanel-BUy1MqPT.js";import"./MultiColumnSortDialog-CBT_vACM.js";import"./MenuTrigger-6qVuDcDW.js";import"./CompositeItem-C2xi6NQ8.js";import"./ToolbarRootContext-CKTJAN59.js";import"./getDisabledMountTransitionStyles-qsFKgmF7.js";import"./getPseudoElementBounds-BxGUr7sx.js";import"./chevron-down-CQ9C1iv5.js";import"./index-DT9lB2o2.js";import"./error-Ds-mn25o.js";import"./BaseCbacBanner-HjtbhaLm.js";import"./makeExternalStore-zsuQEbmY.js";import"./Tooltip-BoGe89IF.js";import"./isObject-BPoSeG26.js";import"./debounce-BSJqKk9p.js";import"./useOsdkClient-5OnXM-6H.js";import"./tick-Cvtd471A.js";import"./DropdownField-BHbHoXLN.js";import"./isEqual-COArf5ti.js";import"./_baseIsEqual-CLLJPHoE.js";import"./withOsdkMetrics-2pGXUPgq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
