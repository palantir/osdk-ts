import{j as i}from"./iframe-gzVrYTak.js";import{O as p}from"./object-table-C-sLm1HQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-oh9z6am2.js";import"./preload-helper-L3pE98T_.js";import"./Table-BkXDUvyw.js";import"./index-RDVHJcvo.js";import"./Dialog-NA1whH4o.js";import"./cross-CM3TMApR.js";import"./svgIconContainer-kSLl__Df.js";import"./useBaseUiId-B81zB54n.js";import"./InternalBackdrop-CxXYb1xI.js";import"./composite-DQVnyrFk.js";import"./index-Cj4q3NWW.js";import"./index-CrUm-nlo.js";import"./index-YkVJ8bwT.js";import"./useEventCallback-CaYSsoFe.js";import"./SkeletonBar-CuVXQn97.js";import"./LoadingCell-BvfCkKa7.js";import"./ColumnConfigDialog-CCz4bxdY.js";import"./DraggableList-CowK3uFp.js";import"./search-DQCB2p55.js";import"./Input-vdipARBj.js";import"./useControlled-IkTNQ6K_.js";import"./isEqual-DAOgit_z.js";import"./isObject-ne5OPKUP.js";import"./Button-iNtaOIhz.js";import"./ActionButton-DkjqAK9y.js";import"./Checkbox-u3pEtOb0.js";import"./useValueChanged-C32Qdb5x.js";import"./CollapsiblePanel-DSjaRvCE.js";import"./MultiColumnSortDialog-XfHjxf5h.js";import"./MenuTrigger-DZ9_zWX7.js";import"./CompositeItem-Y24lxPAU.js";import"./ToolbarRootContext-BEITgtkO.js";import"./getDisabledMountTransitionStyles-BFYTmhnF.js";import"./getPseudoElementBounds-BC-J1AwV.js";import"./chevron-down-ErG01cxd.js";import"./index-BxtnWxzi.js";import"./error-DbGHRKTj.js";import"./BaseCbacBanner-iBnAmYD-.js";import"./makeExternalStore-Cb7zye3Q.js";import"./Tooltip-YgeU8akB.js";import"./PopoverPopup-CX4ORbOa.js";import"./toNumber-Cw2vjGar.js";import"./useOsdkClient-DTgVoOP6.js";import"./tick-BfZPsX8z.js";import"./DropdownField-Cg5Ze26h.js";import"./withOsdkMetrics-CkrFpESP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
