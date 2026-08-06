import{j as i}from"./iframe-DPcQ5jr3.js";import{O as p}from"./object-table-Cvi2wsSZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D7NBK87q.js";import"./preload-helper-DaFFMXPg.js";import"./Table-JBCu0p6N.js";import"./index-BszcYN5m.js";import"./Dialog-DF8bCGRt.js";import"./cross-Ex3v7yAY.js";import"./svgIconContainer-knuh2bP-.js";import"./useBaseUiId-BfxjoMWT.js";import"./InternalBackdrop-BzDztsGv.js";import"./composite-cfOgAKY3.js";import"./index-Pgg50vLk.js";import"./index-D9X45JE7.js";import"./index-Iri7IIar.js";import"./useEventCallback-CaNhgfml.js";import"./SkeletonBar-C16aZ_fC.js";import"./LoadingCell-D9M7rjOe.js";import"./ColumnConfigDialog-Xzoir5jn.js";import"./DraggableList-B30YwC0o.js";import"./search-B1p0IMpD.js";import"./Input-D9StspzA.js";import"./useControlled-DdUaVlhi.js";import"./isEqual-CjzuMNVr.js";import"./isObject-CCdIJM0g.js";import"./Button-C7yoanwN.js";import"./ActionButton-DmcXermo.js";import"./Checkbox-DoBj_QBg.js";import"./useValueChanged-DgXaNmo2.js";import"./CollapsiblePanel-CwlNVmFC.js";import"./MultiColumnSortDialog-D5QJrZUi.js";import"./MenuTrigger-DxZ_38mw.js";import"./CompositeItem-DWSmEBV1.js";import"./ToolbarRootContext-DmbNoojd.js";import"./getDisabledMountTransitionStyles-2mqSuo-H.js";import"./getPseudoElementBounds-BxPMf3nx.js";import"./chevron-down-CMCQfOjD.js";import"./index-m3p1lG2O.js";import"./error-68oFQ-J3.js";import"./BaseCbacBanner-CWBS5cM7.js";import"./makeExternalStore-KDZTlrjP.js";import"./Tooltip-C-kXwqkE.js";import"./PopoverPopup-7zJxTzug.js";import"./toNumber-ClsUi4f1.js";import"./useOsdkClient-79jhrNfk.js";import"./tick-CLohUieJ.js";import"./DropdownField-Ih0KYJXy.js";import"./withOsdkMetrics-Bg5F8JCY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
