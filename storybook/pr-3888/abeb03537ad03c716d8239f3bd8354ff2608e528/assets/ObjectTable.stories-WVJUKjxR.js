import{j as i}from"./iframe-DurHOd68.js";import{O as p}from"./object-table-DoKEMA1l.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bk_IBZUK.js";import"./preload-helper-C4a5shVs.js";import"./Table-DXiJOZ7j.js";import"./index-BigoyWey.js";import"./Dialog-D2KD2KyO.js";import"./cross-CZn1rHNq.js";import"./svgIconContainer-DQNR0e5i.js";import"./useBaseUiId-D0K6ks6X.js";import"./InternalBackdrop-ezEx13Gn.js";import"./composite-pf8Nf7Cg.js";import"./index-BEccjITX.js";import"./index-DMktHvtp.js";import"./index-Ca4doFnI.js";import"./useEventCallback-DvA1SjKb.js";import"./SkeletonBar-Dx8sFDAW.js";import"./LoadingCell-CMpQkQma.js";import"./ColumnConfigDialog-CqWCNg7g.js";import"./DraggableList-CSXzBm0-.js";import"./search-BHV29iQ4.js";import"./Input-CgTzbB35.js";import"./useControlled-558BXAYv.js";import"./Button-C6XRWyAz.js";import"./small-cross-BDITjl9A.js";import"./ActionButton-WLtC926g.js";import"./Checkbox-Cyo2am8o.js";import"./useValueChanged-qPfuKLPX.js";import"./CollapsiblePanel-Cj8pbKNI.js";import"./MultiColumnSortDialog-DFk_eKwM.js";import"./MenuTrigger-DHs8rp-9.js";import"./CompositeItem-BTa5eFJ1.js";import"./ToolbarRootContext-CchGHx-p.js";import"./getDisabledMountTransitionStyles-D-nGQaI5.js";import"./getPseudoElementBounds-BfLbUIYU.js";import"./chevron-down-BWeyWOzk.js";import"./index-0NVWzQhh.js";import"./error-BsWyzq_c.js";import"./BaseCbacBanner-DApI-VbG.js";import"./makeExternalStore-DkbSeVDT.js";import"./Tooltip-BBRKTiIN.js";import"./PopoverPopup-CaGdQLGD.js";import"./debounce-wCH5J5Ks.js";import"./useOsdkClient-BQC30IhZ.js";import"./tick-fHqvmp39.js";import"./DropdownField-lF9AEX_Y.js";import"./isEqual-QsWiyk6Q.js";import"./withOsdkMetrics-ClFS2p81.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
