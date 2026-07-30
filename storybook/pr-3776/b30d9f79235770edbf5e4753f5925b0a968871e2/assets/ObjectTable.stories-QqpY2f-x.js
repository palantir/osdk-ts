import{j as i}from"./iframe--zC_rNSE.js";import{O as p}from"./object-table-BOe9lA2v.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CWOIEPDP.js";import"./preload-helper-DYnZD4Bp.js";import"./Table-CTrKgZzE.js";import"./index-C7vK7TKT.js";import"./Dialog-pyccm_Sl.js";import"./cross-psL1fqiM.js";import"./svgIconContainer-BSLGGDPy.js";import"./useBaseUiId-Du6_ka1U.js";import"./InternalBackdrop-BENyzdBi.js";import"./composite-D6i-F4zZ.js";import"./index-BzW3EPJ0.js";import"./index-C2WM2yYl.js";import"./index-BfXmFMou.js";import"./useEventCallback-XVofj3Q3.js";import"./SkeletonBar-YNg-qpBa.js";import"./LoadingCell-PYrIJpcx.js";import"./ColumnConfigDialog-BuMqvrVq.js";import"./DraggableList-CKyNAhn0.js";import"./search-9tv9kX9R.js";import"./Input-D1rn4ByC.js";import"./useControlled-DosfrPgq.js";import"./isEqual-Cb3ycsU3.js";import"./isObject-ByfmM9yJ.js";import"./Button-9EpLya_p.js";import"./ActionButton-DKUYSo_8.js";import"./Checkbox-D3v20XFe.js";import"./useValueChanged-mNtMEyK1.js";import"./CollapsiblePanel-DZjfEAb-.js";import"./MultiColumnSortDialog-k17NjXzm.js";import"./MenuTrigger-D1QoqV1b.js";import"./CompositeItem-CFehnZQL.js";import"./ToolbarRootContext-D5d-Ayel.js";import"./getDisabledMountTransitionStyles-PGxk2u3W.js";import"./getPseudoElementBounds-BeiAjeWH.js";import"./chevron-down-nViOd0cr.js";import"./index-D27uMw8-.js";import"./error-d8Uq0Jbt.js";import"./BaseCbacBanner-BgjAsq5O.js";import"./makeExternalStore-CC4dIOh5.js";import"./Tooltip-OnHOWk1D.js";import"./PopoverPopup-CeUgEchc.js";import"./toNumber-CkdIolk1.js";import"./useOsdkClient-Dz2X6s2_.js";import"./tick-DSSIsItL.js";import"./DropdownField-wdLac42K.js";import"./withOsdkMetrics-CljqM64x.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
