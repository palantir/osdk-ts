import{j as i}from"./iframe-CUqJoiyS.js";import{O as p}from"./object-table-BnYDDL8D.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B0ElnWjO.js";import"./preload-helper-CqOWo9Kq.js";import"./Table-B1GTAg4A.js";import"./index-DhW4888P.js";import"./Dialog-B-itnpN2.js";import"./cross-GG3fOgP3.js";import"./svgIconContainer-B7WKcrMM.js";import"./useBaseUiId-BZb7TWDk.js";import"./InternalBackdrop-Dq_kPC_w.js";import"./composite-TXFEMlyS.js";import"./index-DAzmwTik.js";import"./index-BBo0v-HH.js";import"./index-BJ9da-D9.js";import"./useEventCallback-Dz2Wo-yx.js";import"./SkeletonBar-Dw2EozU6.js";import"./LoadingCell-rbx7b-G-.js";import"./ColumnConfigDialog-DaEjAh-z.js";import"./DraggableList-DBeD6qpj.js";import"./search-DIQou5oL.js";import"./Input-CRJI3PzK.js";import"./useControlled-BMDtEhI-.js";import"./Button-BNd5oumq.js";import"./small-cross-Cpb8kTzQ.js";import"./ActionButton-EApO2EOv.js";import"./Checkbox-C269ILAZ.js";import"./useValueChanged-MoKiEcJY.js";import"./CollapsiblePanel-DixO6tjx.js";import"./MultiColumnSortDialog-B4yq9Rnw.js";import"./MenuTrigger-D7ayu_ww.js";import"./CompositeItem-Zdmcbf9r.js";import"./ToolbarRootContext-DkHEjN7J.js";import"./getDisabledMountTransitionStyles-D-aggpUt.js";import"./getPseudoElementBounds-CL_A93Bv.js";import"./chevron-down-BfkwxApB.js";import"./index-BCxd25LX.js";import"./error-l4XIFlvt.js";import"./BaseCbacBanner-lm6dXBt-.js";import"./makeExternalStore-DVkGjBto.js";import"./Tooltip-CJfjtiJ9.js";import"./PopoverPopup-Crglkfe6.js";import"./debounce-BVDXVoV0.js";import"./useOsdkClient-B74Rz75W.js";import"./tick-CLiQuWYA.js";import"./DropdownField-DFoQOfPb.js";import"./isEqual-DlgN1XxT.js";import"./withOsdkMetrics-BPGEJQZq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
