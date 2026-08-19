import{j as i}from"./iframe-B_x9XvmG.js";import{O as p}from"./object-table-l5ZKxGcv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DldcP3pD.js";import"./preload-helper-DITc7NUo.js";import"./Table-BxY4gdLK.js";import"./index-C3PElE5z.js";import"./Dialog-QLZadL9p.js";import"./cross-CXaMbnSI.js";import"./svgIconContainer-D4Odc14H.js";import"./useBaseUiId-BiDC3o6s.js";import"./InternalBackdrop-xOer-FmO.js";import"./composite-BZvFUogL.js";import"./index-BLoCQL3a.js";import"./index-BBIYY3UR.js";import"./index-dzoRTbgc.js";import"./useEventCallback-CTv-Axwi.js";import"./SkeletonBar-BsXsv3-p.js";import"./LoadingCell-CjCa9wK8.js";import"./ColumnConfigDialog-D59UQMdg.js";import"./DraggableList-dwa4l-3n.js";import"./search-DnO_YLk6.js";import"./Input-CrrumfsJ.js";import"./useControlled-CmgwpyDU.js";import"./Button-C6ny7jzS.js";import"./small-cross-DvnB8WJm.js";import"./ActionButton-ByK1EtK2.js";import"./Checkbox-BZHsgA9m.js";import"./useValueChanged-CInVWb7b.js";import"./CollapsiblePanel-DrJyDo7E.js";import"./MultiColumnSortDialog-B8T_q1dR.js";import"./MenuTrigger-B0tpP2Ga.js";import"./CompositeItem-C9DYqB7p.js";import"./ToolbarRootContext-7JgjqYNy.js";import"./getDisabledMountTransitionStyles-DoJBgGot.js";import"./getPseudoElementBounds-yhz1puC4.js";import"./chevron-down-Cacce87-.js";import"./index-wwXQ8xo5.js";import"./error-CpyC-KmL.js";import"./BaseCbacBanner-6ECyv6vF.js";import"./makeExternalStore-BY--bFis.js";import"./Tooltip-C9TvRN4R.js";import"./PopoverPopup-BI1Nn7oq.js";import"./debounce-BIWVV4l_.js";import"./useOsdkClient-CBHc-CmL.js";import"./tick-CeNcKQ7_.js";import"./DropdownField-sX4nPjva.js";import"./isEqual-BbGOrC67.js";import"./withOsdkMetrics-BwmTGSf3.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
