import{j as i}from"./iframe-GU9uuCxz.js";import{O as p}from"./object-table-D1ni6jd4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-ZSTDQv.js";import"./preload-helper-DiuBXggc.js";import"./Table-Bfyuy1vX.js";import"./index-wbqNQUCN.js";import"./Dialog-D9fiqstc.js";import"./cross-lUtkcXvq.js";import"./svgIconContainer-lMVp7Q5D.js";import"./useBaseUiId-izgrlbm8.js";import"./InternalBackdrop-JyM_yboG.js";import"./composite-D5bxH43Y.js";import"./index-BiQmph9i.js";import"./index-CWdNU6XI.js";import"./useEventCallback-DbxWTdO3.js";import"./SkeletonBar-DsaZzNM8.js";import"./LoadingCell-oN6k6fLQ.js";import"./ColumnConfigDialog-DuU5N0AY.js";import"./DraggableList-ynrUIkKs.js";import"./search-BwM3LpYv.js";import"./Input-D7wHTW3A.js";import"./useControlled-DeKlo4Fr.js";import"./Button-BfmdkMAB.js";import"./small-cross-CD2Qn0fR.js";import"./ActionButton-1COA3Sdw.js";import"./Checkbox-nA6cG1JI.js";import"./useValueChanged-DwRKotGN.js";import"./CollapsiblePanel-BW9VYb1e.js";import"./MultiColumnSortDialog-C4P1ac3Y.js";import"./MenuTrigger-DvRL7yRT.js";import"./CompositeItem-Cx8rt4Os.js";import"./ToolbarRootContext-CAN5koek.js";import"./getDisabledMountTransitionStyles-C9feCk9b.js";import"./getPseudoElementBounds-D5nIJXlV.js";import"./chevron-down-TCTUxLeS.js";import"./index-C3igxD5N.js";import"./error-BZwp4K-_.js";import"./BaseCbacBanner-sJ6Gr1uy.js";import"./makeExternalStore-B8P6l5nx.js";import"./Tooltip-T6_qKaR2.js";import"./isObject-iIy0QNEy.js";import"./debounce-CRbn1ibT.js";import"./useOsdkClient-Cw50fjDU.js";import"./tick-C-CpglM8.js";import"./DropdownField-DIOwQMdG.js";import"./isEqual-DZy78p28.js";import"./_baseIsEqual-Dd9svSeM.js";import"./withOsdkMetrics-BKdRrZP1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
