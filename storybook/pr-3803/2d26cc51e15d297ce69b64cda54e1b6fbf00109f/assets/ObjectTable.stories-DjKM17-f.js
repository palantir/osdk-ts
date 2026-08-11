import{j as i}from"./iframe-BHGDbtGe.js";import{O as p}from"./object-table-PLsUGZhh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWZKLkOd.js";import"./preload-helper-D5OaizyV.js";import"./Table-qmoBiGzY.js";import"./index-BGbjnL0r.js";import"./Dialog-DBvGyyq5.js";import"./cross-DV8hBvU3.js";import"./svgIconContainer-CZX0yke1.js";import"./useBaseUiId-BxePW4ZZ.js";import"./InternalBackdrop-DcMO0k_5.js";import"./composite-DLWXPmjE.js";import"./index-Q7uht_3R.js";import"./index-DOkphcqk.js";import"./index-CIyc8_0F.js";import"./useEventCallback-D9XTGJn3.js";import"./SkeletonBar-D49d_fWs.js";import"./LoadingCell-BJv2-NGK.js";import"./ColumnConfigDialog-BUcZT3_2.js";import"./DraggableList-D4cXgHW3.js";import"./search-D5NN5dep.js";import"./Input-CI0ds8FO.js";import"./useControlled-CIItNp9c.js";import"./isEqual-DuvxfOEa.js";import"./isObject-DmYI6OMl.js";import"./Button-CWnsWqv5.js";import"./ActionButton-BVvCW9xD.js";import"./Checkbox-CzEGHWa7.js";import"./useValueChanged-BbD1lFs3.js";import"./CollapsiblePanel-Dpzjda5A.js";import"./MultiColumnSortDialog-BhFY8IBd.js";import"./MenuTrigger-8djQiS6H.js";import"./CompositeItem-C05Q1deB.js";import"./ToolbarRootContext-Dd8UM72f.js";import"./getDisabledMountTransitionStyles-B6WkCrv_.js";import"./getPseudoElementBounds-ZMPNX3ba.js";import"./chevron-down-Ddfl__cg.js";import"./index-BIC30L0-.js";import"./error-DTLowD9G.js";import"./BaseCbacBanner-q8yPTdnN.js";import"./makeExternalStore-BcDoXpGE.js";import"./Tooltip-C2epuRfV.js";import"./PopoverPopup-Da7vYhnj.js";import"./toNumber-CbxdLfR-.js";import"./useOsdkClient-Ckca3cDS.js";import"./tick-DA3-zK9O.js";import"./DropdownField-DO_St2lf.js";import"./withOsdkMetrics-BNlgOp0v.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
