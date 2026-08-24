import{j as i}from"./iframe-h1qnQQVx.js";import{O as p}from"./object-table-CCB2sUYl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BgDvNIWs.js";import"./preload-helper-ADovFD1C.js";import"./Table-BgITRHQ7.js";import"./index-DD5KPom6.js";import"./Dialog-D_qB_2bQ.js";import"./cross-D4ej-8wY.js";import"./svgIconContainer-Ca3ASY3c.js";import"./useBaseUiId-hqOZCtk1.js";import"./InternalBackdrop-DzsQOQ6H.js";import"./composite-DEzICmec.js";import"./index-YrVkhqd3.js";import"./index-XQODY1Mp.js";import"./index-bgANXVO3.js";import"./useEventCallback-CAa8wROE.js";import"./SkeletonBar-CZuoXFeA.js";import"./LoadingCell-Dlk9LDgi.js";import"./ColumnConfigDialog--b3u250j.js";import"./DraggableList-DCSYf_a_.js";import"./search-DcazpnHi.js";import"./Input-Cf0RIFeN.js";import"./useControlled-BQy-u6tQ.js";import"./Button-dm1NzbtL.js";import"./small-cross-FuKyHVfD.js";import"./ActionButton-NhxG-Rd-.js";import"./Checkbox-CAMoMPDw.js";import"./useValueChanged-Bp8vrCQO.js";import"./CollapsiblePanel-BDa3QWHs.js";import"./MultiColumnSortDialog-DqDflPY8.js";import"./MenuTrigger-fV8ObzjY.js";import"./CompositeItem-CTw2DdEJ.js";import"./ToolbarRootContext-BYONpLtc.js";import"./getDisabledMountTransitionStyles-M7Lz_Jwx.js";import"./getPseudoElementBounds-25R6sRkV.js";import"./chevron-down-CivjtU0i.js";import"./index-BlgrCeK6.js";import"./error-DJpMatiu.js";import"./BaseCbacBanner-8PJVPI9r.js";import"./makeExternalStore-NEI1OBmX.js";import"./Tooltip-B55QNhDI.js";import"./PopoverPopup-CrYZUhxY.js";import"./debounce-7u23BgIJ.js";import"./useOsdkClient-D3paodEw.js";import"./tick-CkX4BKXY.js";import"./DropdownField-CCAidc8X.js";import"./isEqual-CoPuQcQe.js";import"./withOsdkMetrics-DQ_0oDdX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
