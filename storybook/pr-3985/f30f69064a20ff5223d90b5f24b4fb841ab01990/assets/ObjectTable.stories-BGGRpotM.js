import{j as i}from"./iframe-DgBlFB-Q.js";import{O as p}from"./object-table-BHqLK5RH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tZN5Wyv3.js";import"./preload-helper-Ckmup5sP.js";import"./Table-CSISn0EY.js";import"./index-BMtmTjMy.js";import"./Dialog-DrPzN49d.js";import"./cross-BnOVBF-i.js";import"./svgIconContainer-D-J2n4Ka.js";import"./useBaseUiId-64Qj4RH9.js";import"./InternalBackdrop-Bf-lpEqp.js";import"./composite-CMuAYTfG.js";import"./index-Cyc1Gn9L.js";import"./index-M-GOHxvS.js";import"./index-CRAJZKa6.js";import"./useEventCallback-BCjZTutg.js";import"./SkeletonBar-B-BCIDwW.js";import"./LoadingCell-C_Jv-16E.js";import"./ColumnConfigDialog-DqhVyRtJ.js";import"./DraggableList-CqRIwPKn.js";import"./search-CH52w7PT.js";import"./Input-MozziWfa.js";import"./useControlled-CHdQNKZn.js";import"./Button-Bq1DJjhz.js";import"./small-cross-PRTzBBfj.js";import"./ActionButton-QVdej9JF.js";import"./Checkbox-kH1_7KaN.js";import"./useValueChanged-Du_p_uje.js";import"./CollapsiblePanel-DjJ08X8d.js";import"./MultiColumnSortDialog-CYjdpsMo.js";import"./MenuTrigger-TWWufiWd.js";import"./CompositeItem-i9lnYJRv.js";import"./ToolbarRootContext-qAA2IXiR.js";import"./getDisabledMountTransitionStyles--7J5h99A.js";import"./getPseudoElementBounds-CNGbgi8W.js";import"./chevron-down-DTLIZ0ai.js";import"./index-D32ZsVcf.js";import"./error-BOa7JtYq.js";import"./BaseCbacBanner-B7_-EF7X.js";import"./makeExternalStore-BAWQH3mc.js";import"./Tooltip-A0OoQpoo.js";import"./PopoverPopup-XB39lZ28.js";import"./debounce-BL9pRyBP.js";import"./useOsdkClient-Cxn_Aud3.js";import"./tick-1y5udTAM.js";import"./DropdownField-Dj93kePV.js";import"./isEqual-CFHejaaz.js";import"./withOsdkMetrics-CNTDHmXR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
