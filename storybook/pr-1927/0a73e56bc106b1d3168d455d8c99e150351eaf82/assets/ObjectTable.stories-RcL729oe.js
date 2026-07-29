import{j as i}from"./iframe-DWzyCbmQ.js";import{O as p}from"./object-table-CuSbRsH6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DuSQ5qQ6.js";import"./preload-helper-2jyftVZw.js";import"./Table-CldaYRDR.js";import"./index-Cqwfu9kN.js";import"./Dialog-Cn_zgyMr.js";import"./cross-jZI8Hr1l.js";import"./svgIconContainer-BK_aTV-8.js";import"./useBaseUiId-b2rVpvoU.js";import"./InternalBackdrop-QBE1MHKB.js";import"./composite-BeGq1JGD.js";import"./index-BMaMWApL.js";import"./index-DLztW5cy.js";import"./index-aFeDMRyf.js";import"./useEventCallback-D6jFJjCm.js";import"./SkeletonBar-CtISM4-l.js";import"./LoadingCell-Yj4teP7m.js";import"./ColumnConfigDialog-B0uDq8E7.js";import"./DraggableList-CvU5Locf.js";import"./search-Bri7tWXH.js";import"./Input-YoY-WOGN.js";import"./useControlled-BLqnPlES.js";import"./isEqual-CDh5I7Rn.js";import"./isObject-DdD35Osw.js";import"./Button-BSivVUu-.js";import"./ActionButton-OprUQE1o.js";import"./Checkbox-BfZCPL-_.js";import"./useValueChanged-BBo06APQ.js";import"./CollapsiblePanel-CA-wr5VW.js";import"./MultiColumnSortDialog-CkHucyAD.js";import"./MenuTrigger-CEc8SZAK.js";import"./CompositeItem-Cg2la_5O.js";import"./ToolbarRootContext-CVS0gqd_.js";import"./getDisabledMountTransitionStyles-Bc1sqap-.js";import"./getPseudoElementBounds-Dv2ufZV-.js";import"./chevron-down-CbMtKpux.js";import"./index-X_CuuTrt.js";import"./error-CexwmIKl.js";import"./BaseCbacBanner-B-8aAE9P.js";import"./makeExternalStore-B2gIhY2Q.js";import"./Tooltip-C0YkhHOA.js";import"./PopoverPopup-AybO48ar.js";import"./toNumber-DXAgYOST.js";import"./useOsdkClient-IU3Q42Y8.js";import"./tick-DxexBsqd.js";import"./DropdownField-CE6YHtPo.js";import"./withOsdkMetrics-CvyFQccR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
