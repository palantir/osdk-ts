import{j as i}from"./iframe-S5f-tHYc.js";import{O as p}from"./object-table-Ci-xIoS3.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9B6ob5N.js";import"./preload-helper-CloBdclc.js";import"./Table-BCQUo_-N.js";import"./index-BjvFrMm8.js";import"./Dialog-Dza_Kh2Q.js";import"./cross-CW1FGrOP.js";import"./svgIconContainer-B4-msPtU.js";import"./useBaseUiId-BlrIsTLC.js";import"./InternalBackdrop-CLYIK4GL.js";import"./composite-541HdLvk.js";import"./index-1qViAGfj.js";import"./index-Cnu8xOcy.js";import"./index-CyzOmN0R.js";import"./useEventCallback-DLlqjfcw.js";import"./SkeletonBar-CkCJtsPM.js";import"./LoadingCell-B01Vuagz.js";import"./ColumnConfigDialog-BhYUMQ86.js";import"./DraggableList-B500BrHc.js";import"./search-CIBDynw6.js";import"./Input-DxXCBH_8.js";import"./useControlled-CL7wd5vL.js";import"./Button-FHTr9kOT.js";import"./small-cross-7E36Oaag.js";import"./ActionButton-DQaroWT8.js";import"./Checkbox-DkSL5Wdt.js";import"./useValueChanged-CA0bh4r8.js";import"./CollapsiblePanel-CBgNvisu.js";import"./MultiColumnSortDialog-Dhsa1G2b.js";import"./MenuTrigger-DAWQwhs-.js";import"./CompositeItem-Dg4eVuBQ.js";import"./ToolbarRootContext-DjBkFXc0.js";import"./getDisabledMountTransitionStyles-ZM0SJ2dg.js";import"./getPseudoElementBounds-BWWWPD0F.js";import"./chevron-down-Cgu3kTNg.js";import"./index--nob6yM3.js";import"./error-Dr3zRmrC.js";import"./BaseCbacBanner-BK0aUKAm.js";import"./makeExternalStore-DqL_g-L_.js";import"./Tooltip-C7N2M5Yu.js";import"./PopoverPopup-CzRxRT6J.js";import"./debounce-CMuMdGaR.js";import"./useOsdkClient-DYs9h0g-.js";import"./tick-1JQLMtoH.js";import"./DropdownField-CosoAnxz.js";import"./isEqual-C9oin3_9.js";import"./withOsdkMetrics-BbapYe7K.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
