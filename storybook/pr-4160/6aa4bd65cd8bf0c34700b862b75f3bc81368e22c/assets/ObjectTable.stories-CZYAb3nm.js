import{j as i}from"./iframe-B5CnmteN.js";import{O as p}from"./object-table-gaX4hUZd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CQH0BCga.js";import"./preload-helper-BvIIyaRb.js";import"./Table-CYEWxzsm.js";import"./index-8frbvTc0.js";import"./Dialog-CYPtfWTy.js";import"./cross-pkR4RJ0Q.js";import"./svgIconContainer-Q-T6gYyn.js";import"./useBaseUiId-CpmUOtyx.js";import"./InternalBackdrop-6TwkoN7E.js";import"./composite-DzRtfXwG.js";import"./index-DJMwC2E0.js";import"./index-COZUZoux.js";import"./index-CiKFFLFD.js";import"./useEventCallback-H_-RfLRz.js";import"./SkeletonBar-CKpapgR8.js";import"./LoadingCell-DAczU-a4.js";import"./ColumnConfigDialog-Cn1lmaiq.js";import"./DraggableList-DpqDB0uQ.js";import"./search-BS3g1UNT.js";import"./Input-BFwAdaEg.js";import"./useControlled-BIkM9vG3.js";import"./Button-k7Ft62HK.js";import"./small-cross-CxROeBHB.js";import"./ActionButton-DGDbhDGz.js";import"./Checkbox-ClKS3ff4.js";import"./useValueChanged-DAkLpCOr.js";import"./CollapsiblePanel-Cb_s5Izf.js";import"./MultiColumnSortDialog-CikWbuVd.js";import"./MenuTrigger-Bm-IvUc5.js";import"./CompositeItem-GDYb2RvJ.js";import"./ToolbarRootContext-BCLdmU7d.js";import"./getDisabledMountTransitionStyles-BgPPzZOr.js";import"./getPseudoElementBounds-C6KAFL2T.js";import"./chevron-down-Yu587uLP.js";import"./index-NUZYU-eZ.js";import"./error-DnL9Bib9.js";import"./BaseCbacBanner-CBd6F0qQ.js";import"./makeExternalStore-DQ9Dnm6S.js";import"./Tooltip-CT-rD5V_.js";import"./PopoverPopup-BFzT61y-.js";import"./debounce-B-2K-o_A.js";import"./useOsdkClient-qcHJ86eJ.js";import"./tick-DQyZDVkc.js";import"./DropdownField-BGVoK-k4.js";import"./isEqual-DJdARuJ_.js";import"./withOsdkMetrics-Dx9osySV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
