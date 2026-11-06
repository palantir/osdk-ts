import{j as i}from"./iframe-Dy3pbGVl.js";import{O as p}from"./object-table-kTEr-sWF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-7n0SntDC.js";import"./preload-helper-CpAlczou.js";import"./Table-VOHC5N06.js";import"./index-BGynA5Ey.js";import"./Dialog-zWcA6cDC.js";import"./cross-_ffwL7On.js";import"./svgIconContainer-DwcpIzbz.js";import"./useBaseUiId-1GhcXjBj.js";import"./InternalBackdrop-DMIRmadR.js";import"./composite-DD7PMic6.js";import"./index-rQvGOKiy.js";import"./index-B3hOY3C5.js";import"./index-Dl_Buekn.js";import"./useEventCallback-C3LX0_mu.js";import"./SkeletonBar-DSCrW__O.js";import"./LoadingCell-DfPkft0q.js";import"./ColumnConfigDialog-BbLQ2JxQ.js";import"./DraggableList-C-d_nAEh.js";import"./search-CRVUm7gt.js";import"./Input-Ddh63PuK.js";import"./useControlled-CHjpObPc.js";import"./Button-ByPi26fD.js";import"./small-cross-DjIzegN_.js";import"./ActionButton-DFCeFCb6.js";import"./Checkbox-DDOz7-wX.js";import"./useValueChanged-DpMeL3s2.js";import"./CollapsiblePanel-CBe89pMe.js";import"./MultiColumnSortDialog-CZFWzHwI.js";import"./MenuTrigger-CZSjGNYF.js";import"./CompositeItem-BeUctUoU.js";import"./ToolbarRootContext-B0Ul7YuG.js";import"./getDisabledMountTransitionStyles-eVKTLrRf.js";import"./getPseudoElementBounds-gTzTtYPO.js";import"./chevron-down-8plcDTLG.js";import"./index-TQ3K22OR.js";import"./error-C7pYFxix.js";import"./BaseCbacBanner-C2pkLlLs.js";import"./makeExternalStore-WrhHs9Vh.js";import"./Tooltip-BSjRKIbt.js";import"./PopoverPopup-DrFWXbYx.js";import"./debounce-CXNS7Ik8.js";import"./useOsdkClient-B6m6pKrS.js";import"./tick-CBR4s6ZO.js";import"./DropdownField-CzivYSGB.js";import"./isEqual-Z9n-lDZW.js";import"./withOsdkMetrics-DtiZVH3G.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
