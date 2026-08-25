import{j as i}from"./iframe-K5CHCEyg.js";import{O as p}from"./object-table-utOg00_0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D97l3Jbj.js";import"./preload-helper-D3jqeprX.js";import"./Table-2808Kid_.js";import"./index-WTmR64bn.js";import"./Dialog-CBJLGwFN.js";import"./cross-B8J6ezai.js";import"./svgIconContainer-CtkNh0IR.js";import"./useBaseUiId-BkIc8eue.js";import"./InternalBackdrop-Bf6ULDwV.js";import"./composite-D8qWS-r5.js";import"./index-C8BgW1zx.js";import"./index-BnXdLwCf.js";import"./index-BI6KD8R2.js";import"./useEventCallback-D-391N3D.js";import"./SkeletonBar-Dbxh5j0B.js";import"./LoadingCell-CDNalvIE.js";import"./ColumnConfigDialog-BNnBoxvr.js";import"./DraggableList-CvJLlVkT.js";import"./search-Cx6gmk0L.js";import"./Input-Db1Oj9ts.js";import"./useControlled-CuFQy_dq.js";import"./Button-D0f7TRtC.js";import"./small-cross-B1L4Fyai.js";import"./ActionButton-BMmiIdeT.js";import"./Checkbox-2PlZ_7fg.js";import"./useValueChanged-DnjGf5bs.js";import"./CollapsiblePanel-DBckIGuI.js";import"./MultiColumnSortDialog-Cjy8BRra.js";import"./MenuTrigger-Bg_3sd4W.js";import"./CompositeItem-DJQSjI0-.js";import"./ToolbarRootContext-B1_4tWZH.js";import"./getDisabledMountTransitionStyles-5iGhb6ia.js";import"./getPseudoElementBounds-Bm0MNApQ.js";import"./chevron-down-DVsK0MgR.js";import"./index-CrVnq262.js";import"./error-DpZJYfkw.js";import"./BaseCbacBanner-CyWI_pHr.js";import"./makeExternalStore-CufeVhpI.js";import"./Tooltip-CNcnbhhh.js";import"./PopoverPopup-DPvs26VO.js";import"./debounce-BWGDeaB6.js";import"./useOsdkClient-BMXoort9.js";import"./tick-uVU4NU8V.js";import"./DropdownField-VEWroYGj.js";import"./isEqual-BBzaNYNe.js";import"./withOsdkMetrics-gwVSMO6S.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
