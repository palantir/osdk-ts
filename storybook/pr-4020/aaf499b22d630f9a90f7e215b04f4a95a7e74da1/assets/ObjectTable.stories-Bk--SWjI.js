import{j as i}from"./iframe-CpcWMsh2.js";import{O as p}from"./object-table-CoyGYxq-.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dr_L3SqT.js";import"./preload-helper-CN3GQMjz.js";import"./Table-BgONAB3g.js";import"./index-Crz8jB-9.js";import"./Dialog-BhB2EVK-.js";import"./cross-BGaRJcvO.js";import"./svgIconContainer-Huh63JJu.js";import"./useBaseUiId-DXzATXKT.js";import"./InternalBackdrop-9c6OTDK9.js";import"./composite-CtH7isvm.js";import"./index-BBtYj7J3.js";import"./index-doObrpzR.js";import"./index-DJLjrcri.js";import"./useEventCallback-BGZ2MJrW.js";import"./SkeletonBar-Cx2Gs9qW.js";import"./LoadingCell-TZC5cUR_.js";import"./ColumnConfigDialog-D2vG7jTz.js";import"./DraggableList-WEV7a9Jj.js";import"./search-BprxbqFd.js";import"./Input-BdQWVtdR.js";import"./useControlled-nerw9-6R.js";import"./Button-CUMMFBAM.js";import"./small-cross-5mwwvKLt.js";import"./ActionButton-BHZtYOuv.js";import"./Checkbox-DEm2cTN7.js";import"./useValueChanged-W8zfC5hp.js";import"./CollapsiblePanel-DfsLMHyx.js";import"./MultiColumnSortDialog-ebFoK4Ku.js";import"./MenuTrigger-DyhEEdzn.js";import"./CompositeItem-Bm31Wr9o.js";import"./ToolbarRootContext-nw5M_EUa.js";import"./getDisabledMountTransitionStyles-UM54dXw7.js";import"./getPseudoElementBounds-BytC3tPt.js";import"./chevron-down-ByJuuwk-.js";import"./index-BbnSTWOo.js";import"./error-Cea5AChJ.js";import"./BaseCbacBanner-CdrCSqf6.js";import"./makeExternalStore-6VRmQlrr.js";import"./Tooltip-DshyWHE3.js";import"./PopoverPopup-BmebcJ3w.js";import"./debounce-B90qMA3e.js";import"./useOsdkClient-Bf3Wfvs3.js";import"./tick-DWjjoXoQ.js";import"./DropdownField-BHTMsNk1.js";import"./isEqual-C99oM3wL.js";import"./withOsdkMetrics-CnzpNQ91.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
