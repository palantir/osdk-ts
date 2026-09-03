import{j as i}from"./iframe-BjvWEpQn.js";import{O as p}from"./object-table-Dghp8cw1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BkvpLJm6.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DLthBjEH.js";import"./index-C0GV4moV.js";import"./Dialog-BBM57mMr.js";import"./cross-B1SVZ_Mp.js";import"./svgIconContainer-Bo_QeWGy.js";import"./useBaseUiId-CuHKCZXA.js";import"./InternalBackdrop-DqYDuaqF.js";import"./composite-DOEC86eV.js";import"./index-CX-tc54H.js";import"./index-Blnua_Xd.js";import"./index-NbBH4Ipg.js";import"./useEventCallback-DL6bVjfT.js";import"./SkeletonBar-BzIzSJzJ.js";import"./LoadingCell-PgqUTkYp.js";import"./ColumnConfigDialog-r73jCqBV.js";import"./DraggableList-BtUBQ6G2.js";import"./search-BShNJex1.js";import"./Input-mEIrwYjz.js";import"./useControlled-CIGB80Ap.js";import"./Button-D0Bo1X54.js";import"./small-cross-Db3oVUgZ.js";import"./ActionButton-DMX27iON.js";import"./Checkbox-DvdYscQS.js";import"./useValueChanged-J-bwa0r9.js";import"./CollapsiblePanel-CgTIoXrP.js";import"./MultiColumnSortDialog-CNc6LB8T.js";import"./MenuTrigger-C5cq2d3B.js";import"./CompositeItem-CsOj8GEh.js";import"./ToolbarRootContext-BFzaK2vL.js";import"./getDisabledMountTransitionStyles-D8IcwD5G.js";import"./getPseudoElementBounds-DmjliHjc.js";import"./chevron-down-CIsozBEz.js";import"./index-CpObZ_CB.js";import"./error-0abisA4-.js";import"./BaseCbacBanner-DbMNALsK.js";import"./makeExternalStore-CgVUsbup.js";import"./Tooltip-CbDWIJZu.js";import"./PopoverPopup-DO5dKOfH.js";import"./debounce-DYSSvrJG.js";import"./useOsdkClient-zYvlR-4-.js";import"./tick-DxLK2qZe.js";import"./DropdownField-BlMUNrNh.js";import"./isEqual-CicbEOiS.js";import"./withOsdkMetrics-BESKZGnm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
