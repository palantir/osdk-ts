import{j as i}from"./iframe-BRxXnNeA.js";import{O as p}from"./object-table-BWXmHScr.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers--fX218lq.js";import"./preload-helper-ZwpNBDck.js";import"./Table-DjTRGd0n.js";import"./index-DnUdziE3.js";import"./Dialog-BGn3Kbow.js";import"./cross-p5C9R9_r.js";import"./svgIconContainer-BOuRuwJr.js";import"./useBaseUiId-iHLM7QjT.js";import"./InternalBackdrop-BwZQ0gYG.js";import"./composite-BmCm4IKS.js";import"./index-BMsxRPaK.js";import"./index-V95TsBfL.js";import"./index-DF9ZbJ2O.js";import"./useEventCallback-Dk8Q5KrO.js";import"./SkeletonBar-aCQi_r5v.js";import"./LoadingCell-DwHEwjqu.js";import"./ColumnConfigDialog-CTTwBk2B.js";import"./DraggableList-X9V4ye4K.js";import"./search-DKQ2rHbj.js";import"./Input-CGTuhK0d.js";import"./useControlled-StFrWOwS.js";import"./isEqual-ObeORAz7.js";import"./isObject-GLs1X9xy.js";import"./Button-CLHyeJxI.js";import"./ActionButton-ChbUphi7.js";import"./Checkbox-BWcBAjrk.js";import"./useValueChanged-DWJn24ga.js";import"./CollapsiblePanel-t1PtKIC8.js";import"./MultiColumnSortDialog-BwKtyIja.js";import"./MenuTrigger-o17AnMiN.js";import"./CompositeItem-01NlXsRP.js";import"./ToolbarRootContext-DTrfrJro.js";import"./getDisabledMountTransitionStyles-QcZ-leHz.js";import"./getPseudoElementBounds-Df0V2yLr.js";import"./chevron-down-DBKWZy9U.js";import"./index-CYoRdqfZ.js";import"./error-BFvdxdQn.js";import"./BaseCbacBanner-Dalh-T5O.js";import"./makeExternalStore-DmpDAepm.js";import"./Tooltip-p4FUIbO3.js";import"./PopoverPopup-Bhv815cX.js";import"./toNumber-rktqZQ-g.js";import"./useOsdkClient-CTu4hncc.js";import"./tick-_elaQ7T9.js";import"./DropdownField-DLY5-bws.js";import"./withOsdkMetrics-DEkYj1jo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
