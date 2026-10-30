import{j as i}from"./iframe-D1LXFBxc.js";import{O as p}from"./object-table-Dc6kWb2K.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtTIEjft.js";import"./preload-helper-BMGLbfqy.js";import"./Table-D0crwwGg.js";import"./index-1OI0nGkQ.js";import"./Dialog-5n5dGO1_.js";import"./cross-fpuOrCid.js";import"./svgIconContainer-bswbKgoA.js";import"./useBaseUiId-ps7HY4-v.js";import"./InternalBackdrop-DEpP5i29.js";import"./composite-DuREibPe.js";import"./index-BkZOFAl2.js";import"./index-DHKG1l8R.js";import"./index-CvkHqUxC.js";import"./useEventCallback-BzJZUjXz.js";import"./SkeletonBar-BEUy3yco.js";import"./LoadingCell-BuWFA09M.js";import"./ColumnConfigDialog-DkTHJgbS.js";import"./DraggableList-BFZHGTf-.js";import"./search-DbOA3UnO.js";import"./Input-Dcr7sH0u.js";import"./useControlled-BkSZr9vP.js";import"./Button-DQBtx8tI.js";import"./small-cross-dlZFFK_z.js";import"./ActionButton-Bn6Tlxi1.js";import"./Checkbox-BHZPfKNt.js";import"./useValueChanged-B2y-z1AW.js";import"./CollapsiblePanel-C5zeXEPd.js";import"./MultiColumnSortDialog-BWl5XeOe.js";import"./MenuTrigger-DNQaot3C.js";import"./CompositeItem-TBc75DhR.js";import"./ToolbarRootContext-BWtsBung.js";import"./getDisabledMountTransitionStyles-CUYWOYI-.js";import"./getPseudoElementBounds-D052xtfe.js";import"./chevron-down-BcP7YmhL.js";import"./index-BilF2CpV.js";import"./error-CxJnkhM-.js";import"./BaseCbacBanner-Dw8cKDh4.js";import"./makeExternalStore-BkL46d6x.js";import"./Tooltip-CXZWn5vA.js";import"./isObject-3yusRZvo.js";import"./debounce-CrOoXB7G.js";import"./useOsdkClient-CH0NV-pV.js";import"./tick-Dln8NHKp.js";import"./DropdownField-PSQxNdU1.js";import"./isEqual-DdJdcAmR.js";import"./_baseIsEqual-BvBA96bH.js";import"./withOsdkMetrics-BQyS4Ebn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
