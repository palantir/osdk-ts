import{j as i}from"./iframe-_9fkTt32.js";import{O as p}from"./object-table-Ds0LSr_A.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-h6edaBcw.js";import"./preload-helper-C1KDN5-b.js";import"./Table-BfH3AYXS.js";import"./index-cWweuLXs.js";import"./Dialog-DDti5sW6.js";import"./cross-CLyRJbq3.js";import"./svgIconContainer-Bj9lR9eQ.js";import"./useBaseUiId-B9cqL2iw.js";import"./InternalBackdrop-ChDAtvSF.js";import"./composite-Cv5hA45I.js";import"./index-Bmp8eXG6.js";import"./index-B3Qi-0mZ.js";import"./index-CVU17NaB.js";import"./useEventCallback-DviACpK2.js";import"./SkeletonBar-NFYkElve.js";import"./LoadingCell-C3KVxeej.js";import"./ColumnConfigDialog-BLvSWbg7.js";import"./DraggableList-my9KWtYo.js";import"./search-2EBlNsrp.js";import"./Input-BJm5qzbn.js";import"./useControlled-MrPxBQF8.js";import"./Button-BQ2hDtz9.js";import"./small-cross-BsjnHbCi.js";import"./ActionButton-UeHjpWA6.js";import"./Checkbox-CQp1icRm.js";import"./useValueChanged-DtU61oMW.js";import"./CollapsiblePanel-CX7PBUWu.js";import"./MultiColumnSortDialog-Db5boUS7.js";import"./MenuTrigger-BtF80pzz.js";import"./CompositeItem-_4ruefbl.js";import"./ToolbarRootContext-BGC6f2SR.js";import"./getDisabledMountTransitionStyles-DZsAnPct.js";import"./getPseudoElementBounds-Bjiyc-Ax.js";import"./chevron-down-YT2yainA.js";import"./index-DOjV8DU-.js";import"./error-BJKVIKgH.js";import"./BaseCbacBanner-EYfAEeto.js";import"./makeExternalStore-vS9m26hr.js";import"./Tooltip-BO96ovIJ.js";import"./PopoverPopup-DDdOTGgE.js";import"./debounce-BM4LBZIr.js";import"./useOsdkClient-_fcxm1-q.js";import"./tick-B_jFaN4q.js";import"./DropdownField-D3_R9BRa.js";import"./isEqual-Db12H7kj.js";import"./withOsdkMetrics-lqXp9PIO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
