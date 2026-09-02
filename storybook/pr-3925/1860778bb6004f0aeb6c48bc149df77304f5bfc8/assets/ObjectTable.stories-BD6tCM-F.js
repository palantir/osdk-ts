import{j as i}from"./iframe-CKQO8Vx8.js";import{O as p}from"./object-table-Bt2sUrtO.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DLU_9CdU.js";import"./preload-helper-CwEBdSMT.js";import"./Table-DoriW8mu.js";import"./index-CdmnUnhF.js";import"./Dialog-D0q_Mvut.js";import"./cross-DO9NTRmS.js";import"./svgIconContainer-8H3QdML_.js";import"./useBaseUiId-q6qw1H5x.js";import"./InternalBackdrop-BTNC0mrs.js";import"./composite-DUJXG-6e.js";import"./index-C6tRhyNC.js";import"./index-DyVj7mZ2.js";import"./index-DJy3tnug.js";import"./useEventCallback-CVzmQKkJ.js";import"./SkeletonBar-Dib1lpxv.js";import"./LoadingCell-BduzxgCB.js";import"./ColumnConfigDialog-Ba_ITkEx.js";import"./DraggableList-hcihQCTE.js";import"./search-DzGwW1te.js";import"./Input-DbZHyI8w.js";import"./useControlled-BG6xoYyK.js";import"./Button-C_uhqqdD.js";import"./small-cross-own7Uqs-.js";import"./ActionButton-Dx5rVu5l.js";import"./Checkbox-BcPXCcHY.js";import"./useValueChanged-CawvCcvS.js";import"./CollapsiblePanel-1We0fcIM.js";import"./MultiColumnSortDialog-C4qm4gIr.js";import"./MenuTrigger-BPKmddmT.js";import"./CompositeItem-DNmbzFT9.js";import"./ToolbarRootContext-C-XgkwmF.js";import"./getDisabledMountTransitionStyles-BSB2dByu.js";import"./getPseudoElementBounds-Cv7bWoSP.js";import"./chevron-down-Di9IPq2H.js";import"./index-Bw61tY6z.js";import"./error-BJLkldHu.js";import"./BaseCbacBanner-CdeGiA8M.js";import"./makeExternalStore-BYH0sOuo.js";import"./Tooltip-DaqQjAiE.js";import"./PopoverPopup-CLOXW3BX.js";import"./debounce-ZS8_n_nj.js";import"./useOsdkClient-Dkk6CBBB.js";import"./tick-plzq2OIV.js";import"./DropdownField-CTCBlMF_.js";import"./isEqual-BCtSdQgS.js";import"./withOsdkMetrics-CV_1aUYl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
