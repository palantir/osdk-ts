import{j as i}from"./iframe-uWQw-aoo.js";import{O as p}from"./object-table-Dp7GhjPI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C3Io8tHa.js";import"./preload-helper-DVjylv8h.js";import"./Table-DqmlfuPq.js";import"./index-00plDTMi.js";import"./Dialog-C0KqFrbo.js";import"./cross-BoNTQ4Rv.js";import"./svgIconContainer-DmbccLJt.js";import"./useBaseUiId-Ck6WuZAw.js";import"./InternalBackdrop-iaD87yNq.js";import"./composite-DHcKfgn9.js";import"./index-Cf88_5vk.js";import"./index-qKvH1J36.js";import"./index-CmHx58Lo.js";import"./useEventCallback-BkpTty7v.js";import"./SkeletonBar-BkINP_NN.js";import"./LoadingCell-CoOvoRuy.js";import"./ColumnConfigDialog-1DwLq4p-.js";import"./DraggableList-Co2N2rmb.js";import"./search-BdK0N4i0.js";import"./Input--UpB7VqG.js";import"./useControlled-DUIvla77.js";import"./Button-BmUOiVqe.js";import"./small-cross-BTOgfizl.js";import"./ActionButton-Dpwzo-DI.js";import"./Checkbox-CylUXUJ3.js";import"./useValueChanged-DEC2s52_.js";import"./CollapsiblePanel-DXjJkxFh.js";import"./MultiColumnSortDialog-CmlJzOx5.js";import"./MenuTrigger-4-VSJB-3.js";import"./CompositeItem-CDu6JeOP.js";import"./ToolbarRootContext-DVsy_bXc.js";import"./getDisabledMountTransitionStyles-Cvh2Xj1v.js";import"./getPseudoElementBounds-wBDFt1eN.js";import"./chevron-down-CbHcQ9sT.js";import"./index-DTQn9lDq.js";import"./error-GxXvf_3k.js";import"./BaseCbacBanner-CAAHt1df.js";import"./makeExternalStore-DeeFkPyS.js";import"./Tooltip-BcY8Te_I.js";import"./PopoverPopup-6m2VIyOL.js";import"./debounce-DrqyD1Dz.js";import"./useOsdkClient-CJzg9cBw.js";import"./tick-dsXhEjae.js";import"./DropdownField-Co3vy8Yb.js";import"./isEqual-LeAy7veH.js";import"./withOsdkMetrics-YSsi8cLt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
