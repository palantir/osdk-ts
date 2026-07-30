import{j as i}from"./iframe-rq8NuSfP.js";import{O as p}from"./object-table-Tswkdilm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B10tqXPj.js";import"./preload-helper-CvJz_IUe.js";import"./Table-CGezPmZd.js";import"./index-ysoUH_JH.js";import"./Dialog-CJZ__yxs.js";import"./cross-BBqhm1p8.js";import"./svgIconContainer-DztQZTqt.js";import"./useBaseUiId-Bf-Z0IHd.js";import"./InternalBackdrop-CQ13XFOG.js";import"./composite-sl7bgooi.js";import"./index-B7xRuMiw.js";import"./index-CsgLYqAh.js";import"./index-CeRKYrT8.js";import"./useEventCallback-0iTg9u-J.js";import"./SkeletonBar-DY0bKr4Y.js";import"./LoadingCell-oWeSLE88.js";import"./ColumnConfigDialog-DE7lnRmq.js";import"./DraggableList-DDYXjOD7.js";import"./search-DWeYn3Qn.js";import"./Input-BIVs6kpr.js";import"./useControlled-CkaqNWIl.js";import"./isEqual-D6w6eBfH.js";import"./isObject-LqGLpNGT.js";import"./Button-DuL44OIq.js";import"./ActionButton-DfS5j_S1.js";import"./Checkbox-DIVGPwHV.js";import"./useValueChanged-t2VQXlNB.js";import"./CollapsiblePanel-BlfkVDoM.js";import"./MultiColumnSortDialog-2nBkzcbh.js";import"./MenuTrigger-Cg4wjv4b.js";import"./CompositeItem-Qabrm8X6.js";import"./ToolbarRootContext-DAlNjZIe.js";import"./getDisabledMountTransitionStyles-D29qu8tE.js";import"./getPseudoElementBounds-DLMPfxRO.js";import"./chevron-down-CfpMyllA.js";import"./index-0Ykzd783.js";import"./error-D6eViXnU.js";import"./BaseCbacBanner-BFnJR_Re.js";import"./makeExternalStore-DvD94buu.js";import"./Tooltip-CS9dv8wY.js";import"./PopoverPopup-BFyAfkPc.js";import"./toNumber-BOOCVMDJ.js";import"./useOsdkClient-DbA3yZIX.js";import"./tick-Jg4GGiJ3.js";import"./DropdownField-Cbab9S3i.js";import"./withOsdkMetrics-DHFbf_VX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
