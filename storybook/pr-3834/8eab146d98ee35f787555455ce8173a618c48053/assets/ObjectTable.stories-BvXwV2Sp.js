import{j as i}from"./iframe-5Z3i0E9X.js";import{O as p}from"./object-table-DPTtzRmo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DZoQwvt_.js";import"./preload-helper-CxXp5K4w.js";import"./Table-BS_gimTg.js";import"./index-BfhbkjSI.js";import"./Dialog-BqgcU_l7.js";import"./cross-DZCL8gCN.js";import"./svgIconContainer-DvyPNWZq.js";import"./useBaseUiId-BlRYUEsQ.js";import"./InternalBackdrop-6-8lSj7Z.js";import"./composite-CSBuVBSk.js";import"./index-BPvT0TAi.js";import"./index-lKVM4LMn.js";import"./index-Dv5iqqQH.js";import"./useEventCallback-BJQewwS3.js";import"./SkeletonBar-D5JDKLXI.js";import"./LoadingCell-D3qvPcn9.js";import"./ColumnConfigDialog-D5mityMp.js";import"./DraggableList-DwY_-N0y.js";import"./search-D1X78FHj.js";import"./Input-Bt5W6Bbn.js";import"./useControlled-Q_YoD09k.js";import"./isEqual-DOXwneP4.js";import"./isObject-BxHU6UQF.js";import"./Button-MShjPJp1.js";import"./ActionButton-DuJUtkq_.js";import"./Checkbox-Bb7NREoy.js";import"./useValueChanged-DY3EsH1m.js";import"./CollapsiblePanel-DGnymJiI.js";import"./MultiColumnSortDialog-MmbiKaE0.js";import"./MenuTrigger-CVzLJINj.js";import"./CompositeItem-DT5prC13.js";import"./ToolbarRootContext-CleLhimn.js";import"./getDisabledMountTransitionStyles-CY8wd436.js";import"./getPseudoElementBounds-DjXgxs14.js";import"./chevron-down-CA1gmqiz.js";import"./index-DX-aKmrv.js";import"./error-JfXpK5Qu.js";import"./BaseCbacBanner-CXQ-Qa9l.js";import"./makeExternalStore-yqMU8E9S.js";import"./Tooltip-Drortw-b.js";import"./PopoverPopup-T4fSUWna.js";import"./toNumber-vKmWEYXE.js";import"./useOsdkClient-CAUBTODW.js";import"./tick-C6-DnUEq.js";import"./DropdownField-B4CCJs-u.js";import"./withOsdkMetrics-nuv42wTk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
