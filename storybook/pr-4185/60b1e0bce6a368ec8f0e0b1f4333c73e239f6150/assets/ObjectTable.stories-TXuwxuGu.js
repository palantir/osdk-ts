import{j as i}from"./iframe-DaskLrq8.js";import{O as p}from"./object-table-MAm4yMsf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BpAOQegB.js";import"./preload-helper-BVj_xxLy.js";import"./Table-BvP-To-m.js";import"./index-Bqih82xZ.js";import"./Dialog-CtpINbQM.js";import"./cross-B-0FObLb.js";import"./svgIconContainer-tkjo1pD1.js";import"./useBaseUiId-DMXF2oMu.js";import"./InternalBackdrop-B9JHXWHe.js";import"./composite-BYKbQoC1.js";import"./index-C_mHhOwa.js";import"./index-Dy_kZRgY.js";import"./index-D-OWq9M9.js";import"./useEventCallback-CByJ231d.js";import"./SkeletonBar-hMNf9COI.js";import"./LoadingCell-T_mZ2Fqp.js";import"./ColumnConfigDialog-DLMtz1B4.js";import"./DraggableList-BmtoqCPs.js";import"./search-25BjkPAP.js";import"./Input-DB2lb1xd.js";import"./useControlled-CYCM7Lap.js";import"./Button-BrqzKE8K.js";import"./small-cross-C_TPDXPW.js";import"./ActionButton-BtmJUWQ1.js";import"./Checkbox-BgbRBQ_v.js";import"./useValueChanged-C2EMO01l.js";import"./CollapsiblePanel-BAg1IJpg.js";import"./MultiColumnSortDialog-keYjcxBX.js";import"./MenuTrigger-CoiImOBe.js";import"./CompositeItem-BVBCC1HX.js";import"./ToolbarRootContext-BzuzU9vE.js";import"./getDisabledMountTransitionStyles-Dofl4-A2.js";import"./getPseudoElementBounds-CAy3MVIr.js";import"./chevron-down-CjfhpjkO.js";import"./index-DmvVgxHl.js";import"./error-5sU13yE2.js";import"./BaseCbacBanner-DfyARB2D.js";import"./makeExternalStore-CIn7ze2w.js";import"./Tooltip-TPcB9Skk.js";import"./PopoverPopup-DJm9oZWc.js";import"./debounce-CTR7NOXB.js";import"./useOsdkClient-ijg_QbI1.js";import"./tick-BkVL6nis.js";import"./DropdownField-DABHoDU6.js";import"./isEqual-CvlwB9Oh.js";import"./withOsdkMetrics-CjFNfKow.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
