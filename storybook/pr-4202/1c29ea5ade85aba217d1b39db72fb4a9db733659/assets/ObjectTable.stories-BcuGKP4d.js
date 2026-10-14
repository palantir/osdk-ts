import{j as i}from"./iframe-CIXJ1U8N.js";import{O as p}from"./object-table-DtBNFrGy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-c73KBfeA.js";import"./preload-helper-CgAbFwMM.js";import"./Table-ujY_3q3Y.js";import"./index-2fupTi2T.js";import"./Dialog-CtKlx1EH.js";import"./cross-C_OpOp6J.js";import"./svgIconContainer-Huhb1Vpv.js";import"./useBaseUiId-CSHKQrix.js";import"./InternalBackdrop-BB_NyzKQ.js";import"./composite-CkH4ezLi.js";import"./index-Cj3EoK94.js";import"./index-BD3Sluvn.js";import"./index-CMU6jwvj.js";import"./useEventCallback-BAb1tGXb.js";import"./SkeletonBar-DWlwxS8c.js";import"./LoadingCell-RhYunsw8.js";import"./ColumnConfigDialog-CA_BQylr.js";import"./DraggableList-QR-30KqF.js";import"./search-C5_KVz48.js";import"./Input-BNqEEzus.js";import"./useControlled-Bxgh_fPL.js";import"./Button-B0yxaPGE.js";import"./small-cross-DqpTtCsd.js";import"./ActionButton-P6WNwUke.js";import"./Checkbox-DdW4Dgwk.js";import"./useValueChanged-9P5wqA7j.js";import"./CollapsiblePanel-BvJiT584.js";import"./MultiColumnSortDialog-njBKOwpR.js";import"./MenuTrigger-DL4uNTPf.js";import"./CompositeItem-lWchzb2t.js";import"./ToolbarRootContext-R5s0J2Ul.js";import"./getDisabledMountTransitionStyles-Bdjcrdfd.js";import"./getPseudoElementBounds-BIDolQ8Z.js";import"./chevron-down-7pDp1Oma.js";import"./index-Cy-OTb6Y.js";import"./error-DmS7Y91z.js";import"./BaseCbacBanner-CdsEDBi4.js";import"./makeExternalStore-Dq-OkEYB.js";import"./Tooltip-IZXR1Hew.js";import"./PopoverPopup-SRPRdtkN.js";import"./debounce--Eb71UVP.js";import"./useOsdkClient-hryzPEYC.js";import"./tick-CbF9d7YO.js";import"./DropdownField-BjlvHhR7.js";import"./isEqual-D-5hfkVh.js";import"./withOsdkMetrics-D0zzaBUz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
