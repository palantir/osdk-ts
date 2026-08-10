import{j as i}from"./iframe-DDq7u4il.js";import{O as p}from"./object-table-BpfBfRhb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-42bz-yqQ.js";import"./preload-helper-DchmjQ8j.js";import"./Table-DgOUC1xc.js";import"./index-CRwX66Ho.js";import"./Dialog-H1aqqX4z.js";import"./cross-CnhzJciY.js";import"./svgIconContainer-gjlLDHcU.js";import"./useBaseUiId-DoF2emQC.js";import"./InternalBackdrop-BqfOZCoa.js";import"./composite-24zZeo5k.js";import"./index-wbPw0NdA.js";import"./index-i_VEQr3c.js";import"./index-Dj1wYsHv.js";import"./useEventCallback-CNAdD9HF.js";import"./SkeletonBar-Dmhi5wAM.js";import"./LoadingCell-D4_EgMjp.js";import"./ColumnConfigDialog-DBf4F70r.js";import"./DraggableList-CsH0LNO-.js";import"./search-DW3qWj6H.js";import"./Input-Daps5nhV.js";import"./useControlled-8csFG6-s.js";import"./isEqual-DcN7ZSuF.js";import"./isObject-CNVAtxoQ.js";import"./Button-0qAbUNya.js";import"./ActionButton-BIE8JzJ4.js";import"./Checkbox-DH04k5OL.js";import"./useValueChanged-fBovsQG2.js";import"./CollapsiblePanel-BEveHXGD.js";import"./MultiColumnSortDialog-DFcpSVXu.js";import"./MenuTrigger-Cg7MUzeK.js";import"./CompositeItem-CgZOI2Nx.js";import"./ToolbarRootContext-Cnr8zXiz.js";import"./getDisabledMountTransitionStyles-dF3SUEWY.js";import"./getPseudoElementBounds--4cOuUe2.js";import"./chevron-down-B0rjx85Q.js";import"./index-CyhobMXH.js";import"./error-CVPt2IGW.js";import"./BaseCbacBanner-lUy58fLg.js";import"./makeExternalStore-BGBbZ4XE.js";import"./Tooltip-tEX9kJ8I.js";import"./PopoverPopup-CH6pXruS.js";import"./toNumber-BnYLNr0W.js";import"./useOsdkClient-CqKydsqX.js";import"./tick-BnJ5UWFD.js";import"./DropdownField-wcZcgik2.js";import"./withOsdkMetrics-BzGj8Zi1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
