import{j as i}from"./iframe-CMfq1HPL.js";import{O as p}from"./object-table-CcCF9xfD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BzlNEfpx.js";import"./preload-helper-DoN82JnL.js";import"./Table-lnk4PNlm.js";import"./index-ZtSJidyR.js";import"./Dialog-AYBhRi3p.js";import"./cross-DI771Rnq.js";import"./svgIconContainer-BrnRNdI4.js";import"./useBaseUiId-Doagaslz.js";import"./InternalBackdrop-Dc-khzij.js";import"./composite-BMLB8REs.js";import"./index-Cg-_dyYz.js";import"./index-B0zWLnpw.js";import"./index-C4fS6aHe.js";import"./useEventCallback-k47TyR1L.js";import"./SkeletonBar-GGSFl_LP.js";import"./LoadingCell-isd95lGx.js";import"./ColumnConfigDialog-D7hrX442.js";import"./DraggableList-CskXfy2I.js";import"./search-CFS1aLLr.js";import"./Input-DAfCa_F_.js";import"./useControlled-DxbWxp5f.js";import"./Button-D9k27imK.js";import"./small-cross-CdfUGob6.js";import"./ActionButton-r16LsqMr.js";import"./Checkbox-AFR3J6LC.js";import"./useValueChanged-DEnQRlze.js";import"./CollapsiblePanel-DYiqZ6YX.js";import"./MultiColumnSortDialog-D-eE-EbX.js";import"./MenuTrigger-tpx4AhlM.js";import"./CompositeItem-4nYPF74E.js";import"./ToolbarRootContext-DbEzCTeH.js";import"./getDisabledMountTransitionStyles-DqkNlWWo.js";import"./getPseudoElementBounds-CQ5YRcHT.js";import"./chevron-down-BB1rr6dV.js";import"./index-BOBP5vHC.js";import"./error-CdY5cnSm.js";import"./BaseCbacBanner-C_FfohEN.js";import"./makeExternalStore-DbDNXFhx.js";import"./Tooltip-oJ90YrUX.js";import"./PopoverPopup-cKWzGieP.js";import"./debounce-BkXoP2me.js";import"./useOsdkClient-CosiI0hK.js";import"./tick-DhgpUjs3.js";import"./DropdownField-6o7zN8fP.js";import"./isEqual-BFJpHzgw.js";import"./withOsdkMetrics-CzIhdDBm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
